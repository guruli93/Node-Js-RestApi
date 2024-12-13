import { Test, TestingModule } from '@nestjs/testing';
import { KoteInfoService } from './kote-info.service';

describe('KoteInfoService', () => {
  let service: KoteInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KoteInfoService],
    }).compile();

    service = module.get<KoteInfoService>(KoteInfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
