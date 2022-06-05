import { Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./entity/user.entity";

@Injectable()
export class UserService {
  logger: Logger;

  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {
    this.logger = new Logger();
    this.userRepository = userRepository;
  }

  /**
   * 유저 상세 조회
   */
  findOne(id: number): Promise<User | null> {
    this.logger.log('performance 상세 조회');
    return this.userRepository.findOneBy({ id });
  }
}
