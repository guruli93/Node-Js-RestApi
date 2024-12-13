import { Test, TestingModule } from '@nestjs/testing';
import { KoteController } from './kote.controller';

describe('KoteController', () => {
  let controller: KoteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KoteController],
    }).compile();

    controller = module.get<KoteController>(KoteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
