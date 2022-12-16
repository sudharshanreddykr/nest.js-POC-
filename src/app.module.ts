import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CandidateModule } from './candidate/candidate.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
        type: 'postgres',

        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'root',
        database: 'candidate',
        autoLoadEntities: true,
        synchronize: true,
      }
    )
    , CandidateModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
