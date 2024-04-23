import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import yaml from 'node-yaml-config'
import {IConfig} from './config/types'

const {client}: IConfig = yaml.load("./config.yaml")

export default defineConfig({
  plugins: [react()],
  base: '',
  server: {
    host: client.host,
    port: client.port
  }
})
