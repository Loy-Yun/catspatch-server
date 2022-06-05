import { ApiProperty } from "@nestjs/swagger";
import { User } from "../../user/entity/user.entity";

export class MemoRequestDto {
  user: User;

  @ApiProperty({description: '1~5 사이 숫자'})
  emotion: number;

  @ApiProperty({description: '메모 내용'})
  content: string;

  @ApiProperty({description: '메모일(yyyy-mm-dd'})
  date: Date;
}

export class MemoResponseDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  emotion: number;

  @ApiProperty()
  content: string;

  @ApiProperty()
  date: Date;
}
