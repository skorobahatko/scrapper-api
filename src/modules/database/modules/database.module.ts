import { forwardRef, Module } from '@nestjs/common';

import { UserModule } from 'src/modules';
@Module({
  imports: [forwardRef(() => UserModule)],
  controllers: [],
})
export class DatabaseModule {}
