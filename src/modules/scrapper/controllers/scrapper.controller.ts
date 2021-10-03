import { Body, Controller, Get } from '@nestjs/common';
import { ScrapperService } from '../services/scrapper.service';

@Controller('/scrapper')
export class ScrapperController {
  constructor(private scrapperService: ScrapperService) {}

  @Get('/pure')
  async GetPureScrapp(@Body() body: { url?: string; selectors?: string[] }) {
    if (body?.url && body?.selectors?.length) {
      const result = await this.scrapperService.getResponse(body.url, body.selectors);

      return {
        statusCode: 200,
        data: result,
      };
    } else {
      return {
        data: null,
        statusCode: 200,
      };
    }
  }
}
