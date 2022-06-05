import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

/**
 * Swagger 세팅파일
 *
 * @param {INestApplication} app
 */
export function SwaggerSetup(app: INestApplication): void {
  const options = new DocumentBuilder()
    .setTitle('Cat\'s Patch API Docs')
    .setDescription('앱보서걸 첫번째 프로젝트')
    .setVersion('1.0.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);
}
