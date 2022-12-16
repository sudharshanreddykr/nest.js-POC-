import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import{IsEmpty} from 'class-validator'

export class createFeed{
    @ApiProperty({ example : "feed body"})
    body: string
}

export class queryParams{
    @ApiPropertyOptional()
    limit: number;
    @ApiPropertyOptional()
    pageNo: number;
}

