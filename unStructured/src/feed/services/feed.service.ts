import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { FeedPostEntity } from '../models/post.entity';
import { FeedPost } from '../models/post.interface';

@Injectable()
export class FeedService {
  constructor(
    @InjectRepository(FeedPostEntity)
    private readonly feedPostRepository: Repository<FeedPostEntity>,
  ) {}

  public async createPost(feedPost: FeedPost) {
    return await this.feedPostRepository.save(feedPost);
  }

  public async findAllPosts(limit: number = 10, pageNo: number = 1) {
     const skip= (pageNo-1) * limit ;
      let data = await this.feedPostRepository.findAndCount(
         {
             take: limit,
             skip: skip
         }
     );
      return paginateResponse(data ,pageNo,limit)
  }

  public async findOneById(id : number){
    return await this.feedPostRepository.findOne({id});
  }

  public async updatePost(id: number, feedPost: FeedPost) {
    return await this.feedPostRepository.update(id, feedPost);
  }

  public async deletePost(id: number) {
    return await this.feedPostRepository.delete(id);
  }

}

export function paginateResponse(data,page,limit) {
  const [result, total]=data;
  const lastPage=Math.ceil(total/limit);
  const nextPage=page+1 >lastPage ? null :page+1;
  const prevPage=page-1 < 1 ? null :page-1;
  return {
    statusCode: 200,
    message : 'records fetched successfully',
    data: [...result],
    totalCount: total,
    currentPage: Number(page)
  }
}
