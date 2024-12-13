import { Test, TestingModule } from '@nestjs/testing';
import { KoteService } from './kote.service';

describe('KoteService', () => {
  let service: KoteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KoteService],
    }).compile();

    service = module.get<KoteService>(KoteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
