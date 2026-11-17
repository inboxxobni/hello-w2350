import type { Context } from '@deepseek-ai/cordis'
import { Acryl } from 'acrylblends'

export const name = 'hello-w2350'
export const inject = ['router']
export function apply(ctx: Context): void {
  ctx.router.route('/hello-w2350', new Acryl().get('/', (c) => c.text('hello from hello-w2350')))
}
