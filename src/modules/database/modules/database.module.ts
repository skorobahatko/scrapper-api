import { forwardRef, Module } from "@nestjs/common";

import { UserController, UserModule } from "src/modules";

@Module({
  imports: [forwardRef(() => UserModule)],
  controllers: [UserController]
})

export class DatabaseModule {}