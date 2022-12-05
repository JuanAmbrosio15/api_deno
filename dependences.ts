import { Application, Context, Router } from "https://deno.land/x/oak/mod.ts";

import { Status, STATUS_TEXT } from "https://deno.land/std/http/http_status.ts";

import { expect } from "https://deno.land/x/expect/mod.ts";

import {
  create as jwtCreate,
  decode as jwtDecode,
  getNumericDate,
  verify as jwtVerify,
} from "https://deno.land/x/djwt/mod.ts";

import type {
  Header as jwtHeader,
  Payload as jwtPayload,
} from "https://deno.land/x/djwt/mod.ts";

import { config } from "https://deno.land/x/dotenv/mod.ts";

export {
  crypto,
  toHashString,
} from "https://deno.land/std@0.161.0/crypto/mod.ts";

import {
  Database,
  DataTypes,
  Model,
  MongoDBConnector,
  MySQLConnector,
} from "https://deno.land/x/denodb/mod.ts";

export const { JWT_SECRET } = config({ safe: true });

export {
  Application,
  config,
  Context,
  expect,
  getNumericDate,
  jwtCreate,
  jwtDecode,
  jwtVerify,
  Router,
  Status,
  STATUS_TEXT,
};

export type { jwtHeader, jwtPayload };

export { Database, DataTypes, Model, MongoDBConnector, MySQLConnector };