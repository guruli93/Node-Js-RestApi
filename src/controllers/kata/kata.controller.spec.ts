import { Test, TestingModule } from '@nestjs/testing';
import { KataController } from './kata.controller';

describe('KataController', () => {
  let controller: KataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KataController],
    }).compile();

    controller = module.get<KataController>(KataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
