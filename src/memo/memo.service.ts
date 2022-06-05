import { HttpException, HttpStatus, Injectable, Logger } from "@nestjs/common";
import { Memo } from "./entity/memo.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { MemoRequestDto } from "./dto/memo.dto";
import { User } from "../user/entity/user.entity";

@Injectable()
export class MemoService {
  logger: Logger;

  constructor(
    @InjectRepository(Memo) private memoRepository: Repository<Memo>,
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {
    this.logger = new Logger();
    this.memoRepository = memoRepository;
    this.userRepository = userRepository;
  }

  /**
   * 해당 날짜에 작성된 메모 검사
   */
  async checkMemoExist(userId: number, date: string): Promise<boolean> {
    this.logger.log(date + ' 메모 있는지 확인');
    const count = await this.memoRepository
      .createQueryBuilder('memo')
      .innerJoin('memo.user', 'user')
      .where('date_format(memo.date, "%Y-%m-%d") = :date AND user.id = :userId', { date: date, userId: userId })
      .getCount();
    return count > 0;
  }

  /**
   * 메모 저장
   */
  async save(userId: number, memo: MemoRequestDto): Promise<Memo> {
    this.logger.log(memo.date + ' 메모 저장');
    if(this.checkMemoExist) {
      throw new HttpException({
        code: HttpStatus.BAD_REQUEST,
        message: '해당 날짜에 작성된 메모가 있습니다.'
      }, HttpStatus.BAD_REQUEST)
    }
    memo.user = await this.userRepository.findOneBy({ id: userId });
    return this.memoRepository.save(memo);
  }

  /**
   * 메모 리스트 조회
   */
  findByMonth(userId: number, date: string): Promise<Memo[]> {
    this.logger.log(date + ' 메모 데이터 조회');
    return this.memoRepository
      .createQueryBuilder('memo')
      .innerJoin('memo.user', 'user')
      .where('date_format(memo.date, "%Y-%m") = :date AND user.id = :userId', { date: date, userId: userId })
      .getRawMany();
  }
}
