import { Elysia } from 'elysia'
import { app as sample } from './sample'

export const app = new Elysia().use(sample)
