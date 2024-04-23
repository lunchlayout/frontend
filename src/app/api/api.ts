import axios from "axios";
import { getBaseURL } from "../lib";
import yaml from 'node-yaml-config';
import { IConfig } from "../../../config/types";

const {server}: IConfig = yaml.load('../config/config.yaml')

const $api = axios.create({
    baseURL: getBaseURL(server),
    headers: {
        'Content-Type': 'application/json'
    },
    responseType: 'json',
    timeout: 5000
})

export {$api}