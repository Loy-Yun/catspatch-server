import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { MemoService } from "./memo.service";
import { ApiOkResponse, ApiOperation, ApiParam, ApiTags } from "@nestjs/swagger";
import { MemoRequestDto, MemoResponseDto } from "./dto/memo.dto";
import { ResponseDto } from "../global/dto/global.dto";

@ApiTags('메모📝')
@Controller('memo')
export class MemoController {
  constructor(
    private memoService: MemoService,
  ) {
    this.memoService = memoService;
  }

  @ApiOperation({summary: '메모 작성'})
  @ApiOkResponse({ type: ResponseDto, description: '메모 작성' })
  @Post()
  async createOne(@Body() memo: MemoRequestDto): Promise<any> {
    // TODO: emotion 범위(1~5) 체크, 날짜 중복 체크
    const savedMemo = await this.memoService.save(1, memo);
    return Object.assign({
      data: { id: savedMemo.id },
      statusCode: 200,
      statusMsg: `성공`,
    });
  }

  @ApiParam({
    name: 'date',
    required: true,
    description: '조회할 연도-달(yy-mm)'
  })
  @ApiOperation({summary: '메모 조회'})
  @ApiOkResponse({ type: MemoResponseDto, description: '달 별 메모 리스트' })
  @Get('/:date')
  async findAll(@Param('date') date: string): Promise<any> {
    const memos = await this.memoService.findByMonth(1, date);
    return Object.assign({
      data: memos,
      statusCode: 200,
      statusMsg: `성공`,
    });
  }
}
