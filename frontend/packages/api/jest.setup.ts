import 'whatwg-fetch'
import { server } from '@test/server'

beforeAll(() => {
	server.listen({ onUnhandledRequest: 'error' })
})
afterEach(() => {
	server.resetHandlers()
})
afterAll(() => {
	server.close()
})
