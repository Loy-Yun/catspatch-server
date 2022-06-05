import { ApiProperty } from "@nestjs/swagger";

export class ResponseDto {
  @ApiProperty()
  id: number;
}
