import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Request,
  Res,
} from '@nestjs/common';
import { ApiBody, ApiHeader, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { createFeed, queryParams } from '../dto/create.dto';
import { FeedPost } from '../models/post.interface';
import { FeedService } from '../services/feed.service';
@ApiTags('feed')
// @ApiHeader({
//   name:'header',
//   required:false,
//   description: 'test',
//   schema:{default:'test'}
// })
@Controller('feed')
export class FeedController {
  constructor(private feedService: FeedService) {}
  @Post()
  @ApiResponse({ status:201, description:'records created successfully'  })
  create(
    @Body() feedPost: createFeed
    ) {
    return this.feedService.createPost(feedPost);
  }

  @Get()
  @ApiResponse({ status:200, description:'records fetched successfuly'  })
  async findAll(
    @Query() query :  queryParams
    ){
    const {limit , pageNo} = query
    let data = await this.feedService.findAllPosts(limit, pageNo);
    let result = {
      statusCode : 200,
      message : "records fetched successfuly",
      data 
    }
    return result
  }

  @Get(':id')
  @ApiResponse({ status:200, description:'records fetched successfuly'  })
  async findOne(
    @Param('id') id: number
  ) {
    let data = await this.feedService.findOneById(id);
    let result = {
      statusCode : 200,
      message : "records fetched successfuly",
      data 
    }
    return result
  }

  @Put(':id')
  @ApiResponse({ status:200, description:'records updated successfuly'  })
  update(
    @Param('id') id: number,
    @Body() feedPost: createFeed,
  ) {
    this.feedService.updatePost(id, feedPost);

    return {
      statusCode : 200,
      message : "records updated successfuly",
    }
  }

  @Delete(':id')
  @ApiResponse({ status:200, description:'records daleted successfuly'  })
  delete(@Param('id') id: number) {
    this.feedService.deletePost(id);
    return {
      statusCode : 200,
      message : "records daleted successfuly",
    }
  }

 }
