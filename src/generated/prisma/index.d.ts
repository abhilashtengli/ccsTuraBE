
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Notice
 * 
 */
export type Notice = $Result.DefaultSelection<Prisma.$NoticePayload>
/**
 * Model Bulletin
 * 
 */
export type Bulletin = $Result.DefaultSelection<Prisma.$BulletinPayload>
/**
 * Model FacultyMember
 * 
 */
export type FacultyMember = $Result.DefaultSelection<Prisma.$FacultyMemberPayload>
/**
 * Model NewsUpdate
 * 
 */
export type NewsUpdate = $Result.DefaultSelection<Prisma.$NewsUpdatePayload>
/**
 * Model Advertisement
 * 
 */
export type Advertisement = $Result.DefaultSelection<Prisma.$AdvertisementPayload>
/**
 * Model Tender
 * 
 */
export type Tender = $Result.DefaultSelection<Prisma.$TenderPayload>
/**
 * Model StaffForm
 * 
 */
export type StaffForm = $Result.DefaultSelection<Prisma.$StaffFormPayload>
/**
 * Model GalleryImage
 * 
 */
export type GalleryImage = $Result.DefaultSelection<Prisma.$GalleryImagePayload>
/**
 * Model GalleryVideo
 * 
 */
export type GalleryVideo = $Result.DefaultSelection<Prisma.$GalleryVideoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const StatusType: {
  Open: 'Open',
  Closed: 'Closed'
};

export type StatusType = (typeof StatusType)[keyof typeof StatusType]


export const FacultyType: {
  Teaching: 'Teaching',
  Non_Teaching: 'Non_Teaching'
};

export type FacultyType = (typeof FacultyType)[keyof typeof FacultyType]


export const GalleryCategory: {
  Campus: 'Campus',
  Events: 'Events',
  Students: 'Students',
  Faculty: 'Faculty',
  Sports: 'Sports'
};

export type GalleryCategory = (typeof GalleryCategory)[keyof typeof GalleryCategory]


export const Departments: {
  dept_a: 'dept_a',
  dept_b: 'dept_b',
  dept_c: 'dept_c',
  dept_d: 'dept_d'
};

export type Departments = (typeof Departments)[keyof typeof Departments]

}

export type StatusType = $Enums.StatusType

export const StatusType: typeof $Enums.StatusType

export type FacultyType = $Enums.FacultyType

export const FacultyType: typeof $Enums.FacultyType

export type GalleryCategory = $Enums.GalleryCategory

export const GalleryCategory: typeof $Enums.GalleryCategory

export type Departments = $Enums.Departments

export const Departments: typeof $Enums.Departments

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notice`: Exposes CRUD operations for the **Notice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notices
    * const notices = await prisma.notice.findMany()
    * ```
    */
  get notice(): Prisma.NoticeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bulletin`: Exposes CRUD operations for the **Bulletin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bulletins
    * const bulletins = await prisma.bulletin.findMany()
    * ```
    */
  get bulletin(): Prisma.BulletinDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.facultyMember`: Exposes CRUD operations for the **FacultyMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FacultyMembers
    * const facultyMembers = await prisma.facultyMember.findMany()
    * ```
    */
  get facultyMember(): Prisma.FacultyMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.newsUpdate`: Exposes CRUD operations for the **NewsUpdate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NewsUpdates
    * const newsUpdates = await prisma.newsUpdate.findMany()
    * ```
    */
  get newsUpdate(): Prisma.NewsUpdateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.advertisement`: Exposes CRUD operations for the **Advertisement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Advertisements
    * const advertisements = await prisma.advertisement.findMany()
    * ```
    */
  get advertisement(): Prisma.AdvertisementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tender`: Exposes CRUD operations for the **Tender** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tenders
    * const tenders = await prisma.tender.findMany()
    * ```
    */
  get tender(): Prisma.TenderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.staffForm`: Exposes CRUD operations for the **StaffForm** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StaffForms
    * const staffForms = await prisma.staffForm.findMany()
    * ```
    */
  get staffForm(): Prisma.StaffFormDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.galleryImage`: Exposes CRUD operations for the **GalleryImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GalleryImages
    * const galleryImages = await prisma.galleryImage.findMany()
    * ```
    */
  get galleryImage(): Prisma.GalleryImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.galleryVideo`: Exposes CRUD operations for the **GalleryVideo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GalleryVideos
    * const galleryVideos = await prisma.galleryVideo.findMany()
    * ```
    */
  get galleryVideo(): Prisma.GalleryVideoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Notice: 'Notice',
    Bulletin: 'Bulletin',
    FacultyMember: 'FacultyMember',
    NewsUpdate: 'NewsUpdate',
    Advertisement: 'Advertisement',
    Tender: 'Tender',
    StaffForm: 'StaffForm',
    GalleryImage: 'GalleryImage',
    GalleryVideo: 'GalleryVideo'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "notice" | "bulletin" | "facultyMember" | "newsUpdate" | "advertisement" | "tender" | "staffForm" | "galleryImage" | "galleryVideo"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Notice: {
        payload: Prisma.$NoticePayload<ExtArgs>
        fields: Prisma.NoticeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NoticeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NoticeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload>
          }
          findFirst: {
            args: Prisma.NoticeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NoticeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload>
          }
          findMany: {
            args: Prisma.NoticeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload>[]
          }
          create: {
            args: Prisma.NoticeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload>
          }
          createMany: {
            args: Prisma.NoticeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NoticeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload>[]
          }
          delete: {
            args: Prisma.NoticeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload>
          }
          update: {
            args: Prisma.NoticeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload>
          }
          deleteMany: {
            args: Prisma.NoticeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NoticeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NoticeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload>[]
          }
          upsert: {
            args: Prisma.NoticeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload>
          }
          aggregate: {
            args: Prisma.NoticeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotice>
          }
          groupBy: {
            args: Prisma.NoticeGroupByArgs<ExtArgs>
            result: $Utils.Optional<NoticeGroupByOutputType>[]
          }
          count: {
            args: Prisma.NoticeCountArgs<ExtArgs>
            result: $Utils.Optional<NoticeCountAggregateOutputType> | number
          }
        }
      }
      Bulletin: {
        payload: Prisma.$BulletinPayload<ExtArgs>
        fields: Prisma.BulletinFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BulletinFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulletinPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BulletinFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulletinPayload>
          }
          findFirst: {
            args: Prisma.BulletinFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulletinPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BulletinFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulletinPayload>
          }
          findMany: {
            args: Prisma.BulletinFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulletinPayload>[]
          }
          create: {
            args: Prisma.BulletinCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulletinPayload>
          }
          createMany: {
            args: Prisma.BulletinCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BulletinCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulletinPayload>[]
          }
          delete: {
            args: Prisma.BulletinDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulletinPayload>
          }
          update: {
            args: Prisma.BulletinUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulletinPayload>
          }
          deleteMany: {
            args: Prisma.BulletinDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BulletinUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BulletinUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulletinPayload>[]
          }
          upsert: {
            args: Prisma.BulletinUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulletinPayload>
          }
          aggregate: {
            args: Prisma.BulletinAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBulletin>
          }
          groupBy: {
            args: Prisma.BulletinGroupByArgs<ExtArgs>
            result: $Utils.Optional<BulletinGroupByOutputType>[]
          }
          count: {
            args: Prisma.BulletinCountArgs<ExtArgs>
            result: $Utils.Optional<BulletinCountAggregateOutputType> | number
          }
        }
      }
      FacultyMember: {
        payload: Prisma.$FacultyMemberPayload<ExtArgs>
        fields: Prisma.FacultyMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FacultyMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FacultyMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyMemberPayload>
          }
          findFirst: {
            args: Prisma.FacultyMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FacultyMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyMemberPayload>
          }
          findMany: {
            args: Prisma.FacultyMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyMemberPayload>[]
          }
          create: {
            args: Prisma.FacultyMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyMemberPayload>
          }
          createMany: {
            args: Prisma.FacultyMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FacultyMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyMemberPayload>[]
          }
          delete: {
            args: Prisma.FacultyMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyMemberPayload>
          }
          update: {
            args: Prisma.FacultyMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyMemberPayload>
          }
          deleteMany: {
            args: Prisma.FacultyMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FacultyMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FacultyMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyMemberPayload>[]
          }
          upsert: {
            args: Prisma.FacultyMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyMemberPayload>
          }
          aggregate: {
            args: Prisma.FacultyMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFacultyMember>
          }
          groupBy: {
            args: Prisma.FacultyMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<FacultyMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.FacultyMemberCountArgs<ExtArgs>
            result: $Utils.Optional<FacultyMemberCountAggregateOutputType> | number
          }
        }
      }
      NewsUpdate: {
        payload: Prisma.$NewsUpdatePayload<ExtArgs>
        fields: Prisma.NewsUpdateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsUpdateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsUpdatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsUpdateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsUpdatePayload>
          }
          findFirst: {
            args: Prisma.NewsUpdateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsUpdatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsUpdateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsUpdatePayload>
          }
          findMany: {
            args: Prisma.NewsUpdateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsUpdatePayload>[]
          }
          create: {
            args: Prisma.NewsUpdateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsUpdatePayload>
          }
          createMany: {
            args: Prisma.NewsUpdateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NewsUpdateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsUpdatePayload>[]
          }
          delete: {
            args: Prisma.NewsUpdateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsUpdatePayload>
          }
          update: {
            args: Prisma.NewsUpdateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsUpdatePayload>
          }
          deleteMany: {
            args: Prisma.NewsUpdateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsUpdateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NewsUpdateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsUpdatePayload>[]
          }
          upsert: {
            args: Prisma.NewsUpdateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsUpdatePayload>
          }
          aggregate: {
            args: Prisma.NewsUpdateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNewsUpdate>
          }
          groupBy: {
            args: Prisma.NewsUpdateGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsUpdateGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewsUpdateCountArgs<ExtArgs>
            result: $Utils.Optional<NewsUpdateCountAggregateOutputType> | number
          }
        }
      }
      Advertisement: {
        payload: Prisma.$AdvertisementPayload<ExtArgs>
        fields: Prisma.AdvertisementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdvertisementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertisementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdvertisementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertisementPayload>
          }
          findFirst: {
            args: Prisma.AdvertisementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertisementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdvertisementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertisementPayload>
          }
          findMany: {
            args: Prisma.AdvertisementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertisementPayload>[]
          }
          create: {
            args: Prisma.AdvertisementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertisementPayload>
          }
          createMany: {
            args: Prisma.AdvertisementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdvertisementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertisementPayload>[]
          }
          delete: {
            args: Prisma.AdvertisementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertisementPayload>
          }
          update: {
            args: Prisma.AdvertisementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertisementPayload>
          }
          deleteMany: {
            args: Prisma.AdvertisementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdvertisementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdvertisementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertisementPayload>[]
          }
          upsert: {
            args: Prisma.AdvertisementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertisementPayload>
          }
          aggregate: {
            args: Prisma.AdvertisementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdvertisement>
          }
          groupBy: {
            args: Prisma.AdvertisementGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdvertisementGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdvertisementCountArgs<ExtArgs>
            result: $Utils.Optional<AdvertisementCountAggregateOutputType> | number
          }
        }
      }
      Tender: {
        payload: Prisma.$TenderPayload<ExtArgs>
        fields: Prisma.TenderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TenderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TenderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenderPayload>
          }
          findFirst: {
            args: Prisma.TenderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TenderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenderPayload>
          }
          findMany: {
            args: Prisma.TenderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenderPayload>[]
          }
          create: {
            args: Prisma.TenderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenderPayload>
          }
          createMany: {
            args: Prisma.TenderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TenderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenderPayload>[]
          }
          delete: {
            args: Prisma.TenderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenderPayload>
          }
          update: {
            args: Prisma.TenderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenderPayload>
          }
          deleteMany: {
            args: Prisma.TenderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TenderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TenderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenderPayload>[]
          }
          upsert: {
            args: Prisma.TenderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenderPayload>
          }
          aggregate: {
            args: Prisma.TenderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTender>
          }
          groupBy: {
            args: Prisma.TenderGroupByArgs<ExtArgs>
            result: $Utils.Optional<TenderGroupByOutputType>[]
          }
          count: {
            args: Prisma.TenderCountArgs<ExtArgs>
            result: $Utils.Optional<TenderCountAggregateOutputType> | number
          }
        }
      }
      StaffForm: {
        payload: Prisma.$StaffFormPayload<ExtArgs>
        fields: Prisma.StaffFormFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StaffFormFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffFormPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StaffFormFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffFormPayload>
          }
          findFirst: {
            args: Prisma.StaffFormFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffFormPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StaffFormFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffFormPayload>
          }
          findMany: {
            args: Prisma.StaffFormFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffFormPayload>[]
          }
          create: {
            args: Prisma.StaffFormCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffFormPayload>
          }
          createMany: {
            args: Prisma.StaffFormCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StaffFormCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffFormPayload>[]
          }
          delete: {
            args: Prisma.StaffFormDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffFormPayload>
          }
          update: {
            args: Prisma.StaffFormUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffFormPayload>
          }
          deleteMany: {
            args: Prisma.StaffFormDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StaffFormUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StaffFormUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffFormPayload>[]
          }
          upsert: {
            args: Prisma.StaffFormUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffFormPayload>
          }
          aggregate: {
            args: Prisma.StaffFormAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStaffForm>
          }
          groupBy: {
            args: Prisma.StaffFormGroupByArgs<ExtArgs>
            result: $Utils.Optional<StaffFormGroupByOutputType>[]
          }
          count: {
            args: Prisma.StaffFormCountArgs<ExtArgs>
            result: $Utils.Optional<StaffFormCountAggregateOutputType> | number
          }
        }
      }
      GalleryImage: {
        payload: Prisma.$GalleryImagePayload<ExtArgs>
        fields: Prisma.GalleryImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GalleryImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GalleryImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryImagePayload>
          }
          findFirst: {
            args: Prisma.GalleryImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GalleryImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryImagePayload>
          }
          findMany: {
            args: Prisma.GalleryImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryImagePayload>[]
          }
          create: {
            args: Prisma.GalleryImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryImagePayload>
          }
          createMany: {
            args: Prisma.GalleryImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GalleryImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryImagePayload>[]
          }
          delete: {
            args: Prisma.GalleryImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryImagePayload>
          }
          update: {
            args: Prisma.GalleryImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryImagePayload>
          }
          deleteMany: {
            args: Prisma.GalleryImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GalleryImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GalleryImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryImagePayload>[]
          }
          upsert: {
            args: Prisma.GalleryImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryImagePayload>
          }
          aggregate: {
            args: Prisma.GalleryImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGalleryImage>
          }
          groupBy: {
            args: Prisma.GalleryImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<GalleryImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.GalleryImageCountArgs<ExtArgs>
            result: $Utils.Optional<GalleryImageCountAggregateOutputType> | number
          }
        }
      }
      GalleryVideo: {
        payload: Prisma.$GalleryVideoPayload<ExtArgs>
        fields: Prisma.GalleryVideoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GalleryVideoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryVideoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GalleryVideoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryVideoPayload>
          }
          findFirst: {
            args: Prisma.GalleryVideoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryVideoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GalleryVideoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryVideoPayload>
          }
          findMany: {
            args: Prisma.GalleryVideoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryVideoPayload>[]
          }
          create: {
            args: Prisma.GalleryVideoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryVideoPayload>
          }
          createMany: {
            args: Prisma.GalleryVideoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GalleryVideoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryVideoPayload>[]
          }
          delete: {
            args: Prisma.GalleryVideoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryVideoPayload>
          }
          update: {
            args: Prisma.GalleryVideoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryVideoPayload>
          }
          deleteMany: {
            args: Prisma.GalleryVideoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GalleryVideoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GalleryVideoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryVideoPayload>[]
          }
          upsert: {
            args: Prisma.GalleryVideoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryVideoPayload>
          }
          aggregate: {
            args: Prisma.GalleryVideoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGalleryVideo>
          }
          groupBy: {
            args: Prisma.GalleryVideoGroupByArgs<ExtArgs>
            result: $Utils.Optional<GalleryVideoGroupByOutputType>[]
          }
          count: {
            args: Prisma.GalleryVideoCountArgs<ExtArgs>
            result: $Utils.Optional<GalleryVideoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    notice?: NoticeOmit
    bulletin?: BulletinOmit
    facultyMember?: FacultyMemberOmit
    newsUpdate?: NewsUpdateOmit
    advertisement?: AdvertisementOmit
    tender?: TenderOmit
    staffForm?: StaffFormOmit
    galleryImage?: GalleryImageOmit
    galleryVideo?: GalleryVideoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    createdAt: number
    updateAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updateAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updateAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updateAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    createdAt: Date
    updateAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updateAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updateAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updateAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updateAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "createdAt" | "updateAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      createdAt: Date
      updateAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updateAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Notice
   */

  export type AggregateNotice = {
    _count: NoticeCountAggregateOutputType | null
    _min: NoticeMinAggregateOutputType | null
    _max: NoticeMaxAggregateOutputType | null
  }

  export type NoticeMinAggregateOutputType = {
    id: string | null
    category: string | null
    title: string | null
    pdfUrl: string | null
    pdfKey: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NoticeMaxAggregateOutputType = {
    id: string | null
    category: string | null
    title: string | null
    pdfUrl: string | null
    pdfKey: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NoticeCountAggregateOutputType = {
    id: number
    category: number
    title: number
    pdfUrl: number
    pdfKey: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NoticeMinAggregateInputType = {
    id?: true
    category?: true
    title?: true
    pdfUrl?: true
    pdfKey?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NoticeMaxAggregateInputType = {
    id?: true
    category?: true
    title?: true
    pdfUrl?: true
    pdfKey?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NoticeCountAggregateInputType = {
    id?: true
    category?: true
    title?: true
    pdfUrl?: true
    pdfKey?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NoticeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notice to aggregate.
     */
    where?: NoticeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notices to fetch.
     */
    orderBy?: NoticeOrderByWithRelationInput | NoticeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NoticeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notices
    **/
    _count?: true | NoticeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NoticeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NoticeMaxAggregateInputType
  }

  export type GetNoticeAggregateType<T extends NoticeAggregateArgs> = {
        [P in keyof T & keyof AggregateNotice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotice[P]>
      : GetScalarType<T[P], AggregateNotice[P]>
  }




  export type NoticeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoticeWhereInput
    orderBy?: NoticeOrderByWithAggregationInput | NoticeOrderByWithAggregationInput[]
    by: NoticeScalarFieldEnum[] | NoticeScalarFieldEnum
    having?: NoticeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NoticeCountAggregateInputType | true
    _min?: NoticeMinAggregateInputType
    _max?: NoticeMaxAggregateInputType
  }

  export type NoticeGroupByOutputType = {
    id: string
    category: string
    title: string
    pdfUrl: string
    pdfKey: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: NoticeCountAggregateOutputType | null
    _min: NoticeMinAggregateOutputType | null
    _max: NoticeMaxAggregateOutputType | null
  }

  type GetNoticeGroupByPayload<T extends NoticeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NoticeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NoticeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NoticeGroupByOutputType[P]>
            : GetScalarType<T[P], NoticeGroupByOutputType[P]>
        }
      >
    >


  export type NoticeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    title?: boolean
    pdfUrl?: boolean
    pdfKey?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["notice"]>

  export type NoticeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    title?: boolean
    pdfUrl?: boolean
    pdfKey?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["notice"]>

  export type NoticeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    title?: boolean
    pdfUrl?: boolean
    pdfKey?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["notice"]>

  export type NoticeSelectScalar = {
    id?: boolean
    category?: boolean
    title?: boolean
    pdfUrl?: boolean
    pdfKey?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NoticeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "category" | "title" | "pdfUrl" | "pdfKey" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["notice"]>

  export type $NoticePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notice"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      category: string
      title: string
      pdfUrl: string
      pdfKey: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["notice"]>
    composites: {}
  }

  type NoticeGetPayload<S extends boolean | null | undefined | NoticeDefaultArgs> = $Result.GetResult<Prisma.$NoticePayload, S>

  type NoticeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NoticeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NoticeCountAggregateInputType | true
    }

  export interface NoticeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notice'], meta: { name: 'Notice' } }
    /**
     * Find zero or one Notice that matches the filter.
     * @param {NoticeFindUniqueArgs} args - Arguments to find a Notice
     * @example
     * // Get one Notice
     * const notice = await prisma.notice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NoticeFindUniqueArgs>(args: SelectSubset<T, NoticeFindUniqueArgs<ExtArgs>>): Prisma__NoticeClient<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NoticeFindUniqueOrThrowArgs} args - Arguments to find a Notice
     * @example
     * // Get one Notice
     * const notice = await prisma.notice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NoticeFindUniqueOrThrowArgs>(args: SelectSubset<T, NoticeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NoticeClient<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeFindFirstArgs} args - Arguments to find a Notice
     * @example
     * // Get one Notice
     * const notice = await prisma.notice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NoticeFindFirstArgs>(args?: SelectSubset<T, NoticeFindFirstArgs<ExtArgs>>): Prisma__NoticeClient<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeFindFirstOrThrowArgs} args - Arguments to find a Notice
     * @example
     * // Get one Notice
     * const notice = await prisma.notice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NoticeFindFirstOrThrowArgs>(args?: SelectSubset<T, NoticeFindFirstOrThrowArgs<ExtArgs>>): Prisma__NoticeClient<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notices
     * const notices = await prisma.notice.findMany()
     * 
     * // Get first 10 Notices
     * const notices = await prisma.notice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const noticeWithIdOnly = await prisma.notice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NoticeFindManyArgs>(args?: SelectSubset<T, NoticeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notice.
     * @param {NoticeCreateArgs} args - Arguments to create a Notice.
     * @example
     * // Create one Notice
     * const Notice = await prisma.notice.create({
     *   data: {
     *     // ... data to create a Notice
     *   }
     * })
     * 
     */
    create<T extends NoticeCreateArgs>(args: SelectSubset<T, NoticeCreateArgs<ExtArgs>>): Prisma__NoticeClient<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notices.
     * @param {NoticeCreateManyArgs} args - Arguments to create many Notices.
     * @example
     * // Create many Notices
     * const notice = await prisma.notice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NoticeCreateManyArgs>(args?: SelectSubset<T, NoticeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notices and returns the data saved in the database.
     * @param {NoticeCreateManyAndReturnArgs} args - Arguments to create many Notices.
     * @example
     * // Create many Notices
     * const notice = await prisma.notice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notices and only return the `id`
     * const noticeWithIdOnly = await prisma.notice.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NoticeCreateManyAndReturnArgs>(args?: SelectSubset<T, NoticeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notice.
     * @param {NoticeDeleteArgs} args - Arguments to delete one Notice.
     * @example
     * // Delete one Notice
     * const Notice = await prisma.notice.delete({
     *   where: {
     *     // ... filter to delete one Notice
     *   }
     * })
     * 
     */
    delete<T extends NoticeDeleteArgs>(args: SelectSubset<T, NoticeDeleteArgs<ExtArgs>>): Prisma__NoticeClient<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notice.
     * @param {NoticeUpdateArgs} args - Arguments to update one Notice.
     * @example
     * // Update one Notice
     * const notice = await prisma.notice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NoticeUpdateArgs>(args: SelectSubset<T, NoticeUpdateArgs<ExtArgs>>): Prisma__NoticeClient<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notices.
     * @param {NoticeDeleteManyArgs} args - Arguments to filter Notices to delete.
     * @example
     * // Delete a few Notices
     * const { count } = await prisma.notice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NoticeDeleteManyArgs>(args?: SelectSubset<T, NoticeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notices
     * const notice = await prisma.notice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NoticeUpdateManyArgs>(args: SelectSubset<T, NoticeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notices and returns the data updated in the database.
     * @param {NoticeUpdateManyAndReturnArgs} args - Arguments to update many Notices.
     * @example
     * // Update many Notices
     * const notice = await prisma.notice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notices and only return the `id`
     * const noticeWithIdOnly = await prisma.notice.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NoticeUpdateManyAndReturnArgs>(args: SelectSubset<T, NoticeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notice.
     * @param {NoticeUpsertArgs} args - Arguments to update or create a Notice.
     * @example
     * // Update or create a Notice
     * const notice = await prisma.notice.upsert({
     *   create: {
     *     // ... data to create a Notice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notice we want to update
     *   }
     * })
     */
    upsert<T extends NoticeUpsertArgs>(args: SelectSubset<T, NoticeUpsertArgs<ExtArgs>>): Prisma__NoticeClient<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeCountArgs} args - Arguments to filter Notices to count.
     * @example
     * // Count the number of Notices
     * const count = await prisma.notice.count({
     *   where: {
     *     // ... the filter for the Notices we want to count
     *   }
     * })
    **/
    count<T extends NoticeCountArgs>(
      args?: Subset<T, NoticeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NoticeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NoticeAggregateArgs>(args: Subset<T, NoticeAggregateArgs>): Prisma.PrismaPromise<GetNoticeAggregateType<T>>

    /**
     * Group by Notice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NoticeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NoticeGroupByArgs['orderBy'] }
        : { orderBy?: NoticeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NoticeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNoticeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notice model
   */
  readonly fields: NoticeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NoticeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notice model
   */
  interface NoticeFieldRefs {
    readonly id: FieldRef<"Notice", 'String'>
    readonly category: FieldRef<"Notice", 'String'>
    readonly title: FieldRef<"Notice", 'String'>
    readonly pdfUrl: FieldRef<"Notice", 'String'>
    readonly pdfKey: FieldRef<"Notice", 'String'>
    readonly isActive: FieldRef<"Notice", 'Boolean'>
    readonly createdAt: FieldRef<"Notice", 'DateTime'>
    readonly updatedAt: FieldRef<"Notice", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notice findUnique
   */
  export type NoticeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notice
     */
    omit?: NoticeOmit<ExtArgs> | null
    /**
     * Filter, which Notice to fetch.
     */
    where: NoticeWhereUniqueInput
  }

  /**
   * Notice findUniqueOrThrow
   */
  export type NoticeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notice
     */
    omit?: NoticeOmit<ExtArgs> | null
    /**
     * Filter, which Notice to fetch.
     */
    where: NoticeWhereUniqueInput
  }

  /**
   * Notice findFirst
   */
  export type NoticeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notice
     */
    omit?: NoticeOmit<ExtArgs> | null
    /**
     * Filter, which Notice to fetch.
     */
    where?: NoticeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notices to fetch.
     */
    orderBy?: NoticeOrderByWithRelationInput | NoticeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notices.
     */
    cursor?: NoticeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notices.
     */
    distinct?: NoticeScalarFieldEnum | NoticeScalarFieldEnum[]
  }

  /**
   * Notice findFirstOrThrow
   */
  export type NoticeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notice
     */
    omit?: NoticeOmit<ExtArgs> | null
    /**
     * Filter, which Notice to fetch.
     */
    where?: NoticeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notices to fetch.
     */
    orderBy?: NoticeOrderByWithRelationInput | NoticeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notices.
     */
    cursor?: NoticeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notices.
     */
    distinct?: NoticeScalarFieldEnum | NoticeScalarFieldEnum[]
  }

  /**
   * Notice findMany
   */
  export type NoticeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notice
     */
    omit?: NoticeOmit<ExtArgs> | null
    /**
     * Filter, which Notices to fetch.
     */
    where?: NoticeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notices to fetch.
     */
    orderBy?: NoticeOrderByWithRelationInput | NoticeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notices.
     */
    cursor?: NoticeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notices.
     */
    skip?: number
    distinct?: NoticeScalarFieldEnum | NoticeScalarFieldEnum[]
  }

  /**
   * Notice create
   */
  export type NoticeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notice
     */
    omit?: NoticeOmit<ExtArgs> | null
    /**
     * The data needed to create a Notice.
     */
    data: XOR<NoticeCreateInput, NoticeUncheckedCreateInput>
  }

  /**
   * Notice createMany
   */
  export type NoticeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notices.
     */
    data: NoticeCreateManyInput | NoticeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notice createManyAndReturn
   */
  export type NoticeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notice
     */
    omit?: NoticeOmit<ExtArgs> | null
    /**
     * The data used to create many Notices.
     */
    data: NoticeCreateManyInput | NoticeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notice update
   */
  export type NoticeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notice
     */
    omit?: NoticeOmit<ExtArgs> | null
    /**
     * The data needed to update a Notice.
     */
    data: XOR<NoticeUpdateInput, NoticeUncheckedUpdateInput>
    /**
     * Choose, which Notice to update.
     */
    where: NoticeWhereUniqueInput
  }

  /**
   * Notice updateMany
   */
  export type NoticeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notices.
     */
    data: XOR<NoticeUpdateManyMutationInput, NoticeUncheckedUpdateManyInput>
    /**
     * Filter which Notices to update
     */
    where?: NoticeWhereInput
    /**
     * Limit how many Notices to update.
     */
    limit?: number
  }

  /**
   * Notice updateManyAndReturn
   */
  export type NoticeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notice
     */
    omit?: NoticeOmit<ExtArgs> | null
    /**
     * The data used to update Notices.
     */
    data: XOR<NoticeUpdateManyMutationInput, NoticeUncheckedUpdateManyInput>
    /**
     * Filter which Notices to update
     */
    where?: NoticeWhereInput
    /**
     * Limit how many Notices to update.
     */
    limit?: number
  }

  /**
   * Notice upsert
   */
  export type NoticeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notice
     */
    omit?: NoticeOmit<ExtArgs> | null
    /**
     * The filter to search for the Notice to update in case it exists.
     */
    where: NoticeWhereUniqueInput
    /**
     * In case the Notice found by the `where` argument doesn't exist, create a new Notice with this data.
     */
    create: XOR<NoticeCreateInput, NoticeUncheckedCreateInput>
    /**
     * In case the Notice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NoticeUpdateInput, NoticeUncheckedUpdateInput>
  }

  /**
   * Notice delete
   */
  export type NoticeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notice
     */
    omit?: NoticeOmit<ExtArgs> | null
    /**
     * Filter which Notice to delete.
     */
    where: NoticeWhereUniqueInput
  }

  /**
   * Notice deleteMany
   */
  export type NoticeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notices to delete
     */
    where?: NoticeWhereInput
    /**
     * Limit how many Notices to delete.
     */
    limit?: number
  }

  /**
   * Notice without action
   */
  export type NoticeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notice
     */
    omit?: NoticeOmit<ExtArgs> | null
  }


  /**
   * Model Bulletin
   */

  export type AggregateBulletin = {
    _count: BulletinCountAggregateOutputType | null
    _min: BulletinMinAggregateOutputType | null
    _max: BulletinMaxAggregateOutputType | null
  }

  export type BulletinMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    pdfUrl: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BulletinMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    pdfUrl: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BulletinCountAggregateOutputType = {
    id: number
    title: number
    content: number
    pdfUrl: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BulletinMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    pdfUrl?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BulletinMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    pdfUrl?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BulletinCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    pdfUrl?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BulletinAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bulletin to aggregate.
     */
    where?: BulletinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bulletins to fetch.
     */
    orderBy?: BulletinOrderByWithRelationInput | BulletinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BulletinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bulletins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bulletins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bulletins
    **/
    _count?: true | BulletinCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BulletinMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BulletinMaxAggregateInputType
  }

  export type GetBulletinAggregateType<T extends BulletinAggregateArgs> = {
        [P in keyof T & keyof AggregateBulletin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBulletin[P]>
      : GetScalarType<T[P], AggregateBulletin[P]>
  }




  export type BulletinGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BulletinWhereInput
    orderBy?: BulletinOrderByWithAggregationInput | BulletinOrderByWithAggregationInput[]
    by: BulletinScalarFieldEnum[] | BulletinScalarFieldEnum
    having?: BulletinScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BulletinCountAggregateInputType | true
    _min?: BulletinMinAggregateInputType
    _max?: BulletinMaxAggregateInputType
  }

  export type BulletinGroupByOutputType = {
    id: string
    title: string
    content: string | null
    pdfUrl: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: BulletinCountAggregateOutputType | null
    _min: BulletinMinAggregateOutputType | null
    _max: BulletinMaxAggregateOutputType | null
  }

  type GetBulletinGroupByPayload<T extends BulletinGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BulletinGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BulletinGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BulletinGroupByOutputType[P]>
            : GetScalarType<T[P], BulletinGroupByOutputType[P]>
        }
      >
    >


  export type BulletinSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    pdfUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["bulletin"]>

  export type BulletinSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    pdfUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["bulletin"]>

  export type BulletinSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    pdfUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["bulletin"]>

  export type BulletinSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    pdfUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BulletinOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "pdfUrl" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["bulletin"]>

  export type $BulletinPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bulletin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: string | null
      pdfUrl: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["bulletin"]>
    composites: {}
  }

  type BulletinGetPayload<S extends boolean | null | undefined | BulletinDefaultArgs> = $Result.GetResult<Prisma.$BulletinPayload, S>

  type BulletinCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BulletinFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BulletinCountAggregateInputType | true
    }

  export interface BulletinDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bulletin'], meta: { name: 'Bulletin' } }
    /**
     * Find zero or one Bulletin that matches the filter.
     * @param {BulletinFindUniqueArgs} args - Arguments to find a Bulletin
     * @example
     * // Get one Bulletin
     * const bulletin = await prisma.bulletin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BulletinFindUniqueArgs>(args: SelectSubset<T, BulletinFindUniqueArgs<ExtArgs>>): Prisma__BulletinClient<$Result.GetResult<Prisma.$BulletinPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bulletin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BulletinFindUniqueOrThrowArgs} args - Arguments to find a Bulletin
     * @example
     * // Get one Bulletin
     * const bulletin = await prisma.bulletin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BulletinFindUniqueOrThrowArgs>(args: SelectSubset<T, BulletinFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BulletinClient<$Result.GetResult<Prisma.$BulletinPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bulletin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulletinFindFirstArgs} args - Arguments to find a Bulletin
     * @example
     * // Get one Bulletin
     * const bulletin = await prisma.bulletin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BulletinFindFirstArgs>(args?: SelectSubset<T, BulletinFindFirstArgs<ExtArgs>>): Prisma__BulletinClient<$Result.GetResult<Prisma.$BulletinPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bulletin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulletinFindFirstOrThrowArgs} args - Arguments to find a Bulletin
     * @example
     * // Get one Bulletin
     * const bulletin = await prisma.bulletin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BulletinFindFirstOrThrowArgs>(args?: SelectSubset<T, BulletinFindFirstOrThrowArgs<ExtArgs>>): Prisma__BulletinClient<$Result.GetResult<Prisma.$BulletinPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bulletins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulletinFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bulletins
     * const bulletins = await prisma.bulletin.findMany()
     * 
     * // Get first 10 Bulletins
     * const bulletins = await prisma.bulletin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bulletinWithIdOnly = await prisma.bulletin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BulletinFindManyArgs>(args?: SelectSubset<T, BulletinFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BulletinPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bulletin.
     * @param {BulletinCreateArgs} args - Arguments to create a Bulletin.
     * @example
     * // Create one Bulletin
     * const Bulletin = await prisma.bulletin.create({
     *   data: {
     *     // ... data to create a Bulletin
     *   }
     * })
     * 
     */
    create<T extends BulletinCreateArgs>(args: SelectSubset<T, BulletinCreateArgs<ExtArgs>>): Prisma__BulletinClient<$Result.GetResult<Prisma.$BulletinPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bulletins.
     * @param {BulletinCreateManyArgs} args - Arguments to create many Bulletins.
     * @example
     * // Create many Bulletins
     * const bulletin = await prisma.bulletin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BulletinCreateManyArgs>(args?: SelectSubset<T, BulletinCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bulletins and returns the data saved in the database.
     * @param {BulletinCreateManyAndReturnArgs} args - Arguments to create many Bulletins.
     * @example
     * // Create many Bulletins
     * const bulletin = await prisma.bulletin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bulletins and only return the `id`
     * const bulletinWithIdOnly = await prisma.bulletin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BulletinCreateManyAndReturnArgs>(args?: SelectSubset<T, BulletinCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BulletinPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bulletin.
     * @param {BulletinDeleteArgs} args - Arguments to delete one Bulletin.
     * @example
     * // Delete one Bulletin
     * const Bulletin = await prisma.bulletin.delete({
     *   where: {
     *     // ... filter to delete one Bulletin
     *   }
     * })
     * 
     */
    delete<T extends BulletinDeleteArgs>(args: SelectSubset<T, BulletinDeleteArgs<ExtArgs>>): Prisma__BulletinClient<$Result.GetResult<Prisma.$BulletinPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bulletin.
     * @param {BulletinUpdateArgs} args - Arguments to update one Bulletin.
     * @example
     * // Update one Bulletin
     * const bulletin = await prisma.bulletin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BulletinUpdateArgs>(args: SelectSubset<T, BulletinUpdateArgs<ExtArgs>>): Prisma__BulletinClient<$Result.GetResult<Prisma.$BulletinPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bulletins.
     * @param {BulletinDeleteManyArgs} args - Arguments to filter Bulletins to delete.
     * @example
     * // Delete a few Bulletins
     * const { count } = await prisma.bulletin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BulletinDeleteManyArgs>(args?: SelectSubset<T, BulletinDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bulletins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulletinUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bulletins
     * const bulletin = await prisma.bulletin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BulletinUpdateManyArgs>(args: SelectSubset<T, BulletinUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bulletins and returns the data updated in the database.
     * @param {BulletinUpdateManyAndReturnArgs} args - Arguments to update many Bulletins.
     * @example
     * // Update many Bulletins
     * const bulletin = await prisma.bulletin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bulletins and only return the `id`
     * const bulletinWithIdOnly = await prisma.bulletin.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BulletinUpdateManyAndReturnArgs>(args: SelectSubset<T, BulletinUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BulletinPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bulletin.
     * @param {BulletinUpsertArgs} args - Arguments to update or create a Bulletin.
     * @example
     * // Update or create a Bulletin
     * const bulletin = await prisma.bulletin.upsert({
     *   create: {
     *     // ... data to create a Bulletin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bulletin we want to update
     *   }
     * })
     */
    upsert<T extends BulletinUpsertArgs>(args: SelectSubset<T, BulletinUpsertArgs<ExtArgs>>): Prisma__BulletinClient<$Result.GetResult<Prisma.$BulletinPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bulletins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulletinCountArgs} args - Arguments to filter Bulletins to count.
     * @example
     * // Count the number of Bulletins
     * const count = await prisma.bulletin.count({
     *   where: {
     *     // ... the filter for the Bulletins we want to count
     *   }
     * })
    **/
    count<T extends BulletinCountArgs>(
      args?: Subset<T, BulletinCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BulletinCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bulletin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulletinAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BulletinAggregateArgs>(args: Subset<T, BulletinAggregateArgs>): Prisma.PrismaPromise<GetBulletinAggregateType<T>>

    /**
     * Group by Bulletin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulletinGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BulletinGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BulletinGroupByArgs['orderBy'] }
        : { orderBy?: BulletinGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BulletinGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBulletinGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bulletin model
   */
  readonly fields: BulletinFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bulletin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BulletinClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Bulletin model
   */
  interface BulletinFieldRefs {
    readonly id: FieldRef<"Bulletin", 'String'>
    readonly title: FieldRef<"Bulletin", 'String'>
    readonly content: FieldRef<"Bulletin", 'String'>
    readonly pdfUrl: FieldRef<"Bulletin", 'String'>
    readonly isActive: FieldRef<"Bulletin", 'Boolean'>
    readonly createdAt: FieldRef<"Bulletin", 'DateTime'>
    readonly updatedAt: FieldRef<"Bulletin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Bulletin findUnique
   */
  export type BulletinFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bulletin
     */
    select?: BulletinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bulletin
     */
    omit?: BulletinOmit<ExtArgs> | null
    /**
     * Filter, which Bulletin to fetch.
     */
    where: BulletinWhereUniqueInput
  }

  /**
   * Bulletin findUniqueOrThrow
   */
  export type BulletinFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bulletin
     */
    select?: BulletinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bulletin
     */
    omit?: BulletinOmit<ExtArgs> | null
    /**
     * Filter, which Bulletin to fetch.
     */
    where: BulletinWhereUniqueInput
  }

  /**
   * Bulletin findFirst
   */
  export type BulletinFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bulletin
     */
    select?: BulletinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bulletin
     */
    omit?: BulletinOmit<ExtArgs> | null
    /**
     * Filter, which Bulletin to fetch.
     */
    where?: BulletinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bulletins to fetch.
     */
    orderBy?: BulletinOrderByWithRelationInput | BulletinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bulletins.
     */
    cursor?: BulletinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bulletins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bulletins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bulletins.
     */
    distinct?: BulletinScalarFieldEnum | BulletinScalarFieldEnum[]
  }

  /**
   * Bulletin findFirstOrThrow
   */
  export type BulletinFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bulletin
     */
    select?: BulletinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bulletin
     */
    omit?: BulletinOmit<ExtArgs> | null
    /**
     * Filter, which Bulletin to fetch.
     */
    where?: BulletinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bulletins to fetch.
     */
    orderBy?: BulletinOrderByWithRelationInput | BulletinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bulletins.
     */
    cursor?: BulletinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bulletins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bulletins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bulletins.
     */
    distinct?: BulletinScalarFieldEnum | BulletinScalarFieldEnum[]
  }

  /**
   * Bulletin findMany
   */
  export type BulletinFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bulletin
     */
    select?: BulletinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bulletin
     */
    omit?: BulletinOmit<ExtArgs> | null
    /**
     * Filter, which Bulletins to fetch.
     */
    where?: BulletinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bulletins to fetch.
     */
    orderBy?: BulletinOrderByWithRelationInput | BulletinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bulletins.
     */
    cursor?: BulletinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bulletins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bulletins.
     */
    skip?: number
    distinct?: BulletinScalarFieldEnum | BulletinScalarFieldEnum[]
  }

  /**
   * Bulletin create
   */
  export type BulletinCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bulletin
     */
    select?: BulletinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bulletin
     */
    omit?: BulletinOmit<ExtArgs> | null
    /**
     * The data needed to create a Bulletin.
     */
    data: XOR<BulletinCreateInput, BulletinUncheckedCreateInput>
  }

  /**
   * Bulletin createMany
   */
  export type BulletinCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bulletins.
     */
    data: BulletinCreateManyInput | BulletinCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bulletin createManyAndReturn
   */
  export type BulletinCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bulletin
     */
    select?: BulletinSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bulletin
     */
    omit?: BulletinOmit<ExtArgs> | null
    /**
     * The data used to create many Bulletins.
     */
    data: BulletinCreateManyInput | BulletinCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bulletin update
   */
  export type BulletinUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bulletin
     */
    select?: BulletinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bulletin
     */
    omit?: BulletinOmit<ExtArgs> | null
    /**
     * The data needed to update a Bulletin.
     */
    data: XOR<BulletinUpdateInput, BulletinUncheckedUpdateInput>
    /**
     * Choose, which Bulletin to update.
     */
    where: BulletinWhereUniqueInput
  }

  /**
   * Bulletin updateMany
   */
  export type BulletinUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bulletins.
     */
    data: XOR<BulletinUpdateManyMutationInput, BulletinUncheckedUpdateManyInput>
    /**
     * Filter which Bulletins to update
     */
    where?: BulletinWhereInput
    /**
     * Limit how many Bulletins to update.
     */
    limit?: number
  }

  /**
   * Bulletin updateManyAndReturn
   */
  export type BulletinUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bulletin
     */
    select?: BulletinSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bulletin
     */
    omit?: BulletinOmit<ExtArgs> | null
    /**
     * The data used to update Bulletins.
     */
    data: XOR<BulletinUpdateManyMutationInput, BulletinUncheckedUpdateManyInput>
    /**
     * Filter which Bulletins to update
     */
    where?: BulletinWhereInput
    /**
     * Limit how many Bulletins to update.
     */
    limit?: number
  }

  /**
   * Bulletin upsert
   */
  export type BulletinUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bulletin
     */
    select?: BulletinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bulletin
     */
    omit?: BulletinOmit<ExtArgs> | null
    /**
     * The filter to search for the Bulletin to update in case it exists.
     */
    where: BulletinWhereUniqueInput
    /**
     * In case the Bulletin found by the `where` argument doesn't exist, create a new Bulletin with this data.
     */
    create: XOR<BulletinCreateInput, BulletinUncheckedCreateInput>
    /**
     * In case the Bulletin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BulletinUpdateInput, BulletinUncheckedUpdateInput>
  }

  /**
   * Bulletin delete
   */
  export type BulletinDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bulletin
     */
    select?: BulletinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bulletin
     */
    omit?: BulletinOmit<ExtArgs> | null
    /**
     * Filter which Bulletin to delete.
     */
    where: BulletinWhereUniqueInput
  }

  /**
   * Bulletin deleteMany
   */
  export type BulletinDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bulletins to delete
     */
    where?: BulletinWhereInput
    /**
     * Limit how many Bulletins to delete.
     */
    limit?: number
  }

  /**
   * Bulletin without action
   */
  export type BulletinDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bulletin
     */
    select?: BulletinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bulletin
     */
    omit?: BulletinOmit<ExtArgs> | null
  }


  /**
   * Model FacultyMember
   */

  export type AggregateFacultyMember = {
    _count: FacultyMemberCountAggregateOutputType | null
    _min: FacultyMemberMinAggregateOutputType | null
    _max: FacultyMemberMaxAggregateOutputType | null
  }

  export type FacultyMemberMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    contactNumber: string | null
    profileImageUrl: string | null
    imageKey: string | null
    designation: string | null
    isHod: boolean | null
    facultyType: $Enums.FacultyType | null
    cvUrl: string | null
    pdfKey: string | null
    createdAt: Date | null
    updatedAt: Date | null
    department: $Enums.Departments | null
  }

  export type FacultyMemberMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    contactNumber: string | null
    profileImageUrl: string | null
    imageKey: string | null
    designation: string | null
    isHod: boolean | null
    facultyType: $Enums.FacultyType | null
    cvUrl: string | null
    pdfKey: string | null
    createdAt: Date | null
    updatedAt: Date | null
    department: $Enums.Departments | null
  }

  export type FacultyMemberCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    contactNumber: number
    profileImageUrl: number
    imageKey: number
    designation: number
    isHod: number
    facultyType: number
    cvUrl: number
    pdfKey: number
    socialLinks: number
    createdAt: number
    updatedAt: number
    department: number
    _all: number
  }


  export type FacultyMemberMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    contactNumber?: true
    profileImageUrl?: true
    imageKey?: true
    designation?: true
    isHod?: true
    facultyType?: true
    cvUrl?: true
    pdfKey?: true
    createdAt?: true
    updatedAt?: true
    department?: true
  }

  export type FacultyMemberMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    contactNumber?: true
    profileImageUrl?: true
    imageKey?: true
    designation?: true
    isHod?: true
    facultyType?: true
    cvUrl?: true
    pdfKey?: true
    createdAt?: true
    updatedAt?: true
    department?: true
  }

  export type FacultyMemberCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    contactNumber?: true
    profileImageUrl?: true
    imageKey?: true
    designation?: true
    isHod?: true
    facultyType?: true
    cvUrl?: true
    pdfKey?: true
    socialLinks?: true
    createdAt?: true
    updatedAt?: true
    department?: true
    _all?: true
  }

  export type FacultyMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FacultyMember to aggregate.
     */
    where?: FacultyMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacultyMembers to fetch.
     */
    orderBy?: FacultyMemberOrderByWithRelationInput | FacultyMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FacultyMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacultyMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacultyMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FacultyMembers
    **/
    _count?: true | FacultyMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FacultyMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FacultyMemberMaxAggregateInputType
  }

  export type GetFacultyMemberAggregateType<T extends FacultyMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateFacultyMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFacultyMember[P]>
      : GetScalarType<T[P], AggregateFacultyMember[P]>
  }




  export type FacultyMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacultyMemberWhereInput
    orderBy?: FacultyMemberOrderByWithAggregationInput | FacultyMemberOrderByWithAggregationInput[]
    by: FacultyMemberScalarFieldEnum[] | FacultyMemberScalarFieldEnum
    having?: FacultyMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FacultyMemberCountAggregateInputType | true
    _min?: FacultyMemberMinAggregateInputType
    _max?: FacultyMemberMaxAggregateInputType
  }

  export type FacultyMemberGroupByOutputType = {
    id: string
    firstName: string
    lastName: string | null
    email: string
    contactNumber: string | null
    profileImageUrl: string | null
    imageKey: string | null
    designation: string
    isHod: boolean
    facultyType: $Enums.FacultyType
    cvUrl: string | null
    pdfKey: string | null
    socialLinks: JsonValue | null
    createdAt: Date
    updatedAt: Date
    department: $Enums.Departments
    _count: FacultyMemberCountAggregateOutputType | null
    _min: FacultyMemberMinAggregateOutputType | null
    _max: FacultyMemberMaxAggregateOutputType | null
  }

  type GetFacultyMemberGroupByPayload<T extends FacultyMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FacultyMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FacultyMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FacultyMemberGroupByOutputType[P]>
            : GetScalarType<T[P], FacultyMemberGroupByOutputType[P]>
        }
      >
    >


  export type FacultyMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    contactNumber?: boolean
    profileImageUrl?: boolean
    imageKey?: boolean
    designation?: boolean
    isHod?: boolean
    facultyType?: boolean
    cvUrl?: boolean
    pdfKey?: boolean
    socialLinks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    department?: boolean
  }, ExtArgs["result"]["facultyMember"]>

  export type FacultyMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    contactNumber?: boolean
    profileImageUrl?: boolean
    imageKey?: boolean
    designation?: boolean
    isHod?: boolean
    facultyType?: boolean
    cvUrl?: boolean
    pdfKey?: boolean
    socialLinks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    department?: boolean
  }, ExtArgs["result"]["facultyMember"]>

  export type FacultyMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    contactNumber?: boolean
    profileImageUrl?: boolean
    imageKey?: boolean
    designation?: boolean
    isHod?: boolean
    facultyType?: boolean
    cvUrl?: boolean
    pdfKey?: boolean
    socialLinks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    department?: boolean
  }, ExtArgs["result"]["facultyMember"]>

  export type FacultyMemberSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    contactNumber?: boolean
    profileImageUrl?: boolean
    imageKey?: boolean
    designation?: boolean
    isHod?: boolean
    facultyType?: boolean
    cvUrl?: boolean
    pdfKey?: boolean
    socialLinks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    department?: boolean
  }

  export type FacultyMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "contactNumber" | "profileImageUrl" | "imageKey" | "designation" | "isHod" | "facultyType" | "cvUrl" | "pdfKey" | "socialLinks" | "createdAt" | "updatedAt" | "department", ExtArgs["result"]["facultyMember"]>

  export type $FacultyMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FacultyMember"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string | null
      email: string
      contactNumber: string | null
      profileImageUrl: string | null
      imageKey: string | null
      designation: string
      isHod: boolean
      facultyType: $Enums.FacultyType
      cvUrl: string | null
      pdfKey: string | null
      socialLinks: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
      department: $Enums.Departments
    }, ExtArgs["result"]["facultyMember"]>
    composites: {}
  }

  type FacultyMemberGetPayload<S extends boolean | null | undefined | FacultyMemberDefaultArgs> = $Result.GetResult<Prisma.$FacultyMemberPayload, S>

  type FacultyMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FacultyMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FacultyMemberCountAggregateInputType | true
    }

  export interface FacultyMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FacultyMember'], meta: { name: 'FacultyMember' } }
    /**
     * Find zero or one FacultyMember that matches the filter.
     * @param {FacultyMemberFindUniqueArgs} args - Arguments to find a FacultyMember
     * @example
     * // Get one FacultyMember
     * const facultyMember = await prisma.facultyMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FacultyMemberFindUniqueArgs>(args: SelectSubset<T, FacultyMemberFindUniqueArgs<ExtArgs>>): Prisma__FacultyMemberClient<$Result.GetResult<Prisma.$FacultyMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FacultyMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FacultyMemberFindUniqueOrThrowArgs} args - Arguments to find a FacultyMember
     * @example
     * // Get one FacultyMember
     * const facultyMember = await prisma.facultyMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FacultyMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, FacultyMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FacultyMemberClient<$Result.GetResult<Prisma.$FacultyMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FacultyMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyMemberFindFirstArgs} args - Arguments to find a FacultyMember
     * @example
     * // Get one FacultyMember
     * const facultyMember = await prisma.facultyMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FacultyMemberFindFirstArgs>(args?: SelectSubset<T, FacultyMemberFindFirstArgs<ExtArgs>>): Prisma__FacultyMemberClient<$Result.GetResult<Prisma.$FacultyMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FacultyMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyMemberFindFirstOrThrowArgs} args - Arguments to find a FacultyMember
     * @example
     * // Get one FacultyMember
     * const facultyMember = await prisma.facultyMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FacultyMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, FacultyMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__FacultyMemberClient<$Result.GetResult<Prisma.$FacultyMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FacultyMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FacultyMembers
     * const facultyMembers = await prisma.facultyMember.findMany()
     * 
     * // Get first 10 FacultyMembers
     * const facultyMembers = await prisma.facultyMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const facultyMemberWithIdOnly = await prisma.facultyMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FacultyMemberFindManyArgs>(args?: SelectSubset<T, FacultyMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacultyMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FacultyMember.
     * @param {FacultyMemberCreateArgs} args - Arguments to create a FacultyMember.
     * @example
     * // Create one FacultyMember
     * const FacultyMember = await prisma.facultyMember.create({
     *   data: {
     *     // ... data to create a FacultyMember
     *   }
     * })
     * 
     */
    create<T extends FacultyMemberCreateArgs>(args: SelectSubset<T, FacultyMemberCreateArgs<ExtArgs>>): Prisma__FacultyMemberClient<$Result.GetResult<Prisma.$FacultyMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FacultyMembers.
     * @param {FacultyMemberCreateManyArgs} args - Arguments to create many FacultyMembers.
     * @example
     * // Create many FacultyMembers
     * const facultyMember = await prisma.facultyMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FacultyMemberCreateManyArgs>(args?: SelectSubset<T, FacultyMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FacultyMembers and returns the data saved in the database.
     * @param {FacultyMemberCreateManyAndReturnArgs} args - Arguments to create many FacultyMembers.
     * @example
     * // Create many FacultyMembers
     * const facultyMember = await prisma.facultyMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FacultyMembers and only return the `id`
     * const facultyMemberWithIdOnly = await prisma.facultyMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FacultyMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, FacultyMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacultyMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FacultyMember.
     * @param {FacultyMemberDeleteArgs} args - Arguments to delete one FacultyMember.
     * @example
     * // Delete one FacultyMember
     * const FacultyMember = await prisma.facultyMember.delete({
     *   where: {
     *     // ... filter to delete one FacultyMember
     *   }
     * })
     * 
     */
    delete<T extends FacultyMemberDeleteArgs>(args: SelectSubset<T, FacultyMemberDeleteArgs<ExtArgs>>): Prisma__FacultyMemberClient<$Result.GetResult<Prisma.$FacultyMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FacultyMember.
     * @param {FacultyMemberUpdateArgs} args - Arguments to update one FacultyMember.
     * @example
     * // Update one FacultyMember
     * const facultyMember = await prisma.facultyMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FacultyMemberUpdateArgs>(args: SelectSubset<T, FacultyMemberUpdateArgs<ExtArgs>>): Prisma__FacultyMemberClient<$Result.GetResult<Prisma.$FacultyMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FacultyMembers.
     * @param {FacultyMemberDeleteManyArgs} args - Arguments to filter FacultyMembers to delete.
     * @example
     * // Delete a few FacultyMembers
     * const { count } = await prisma.facultyMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FacultyMemberDeleteManyArgs>(args?: SelectSubset<T, FacultyMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FacultyMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FacultyMembers
     * const facultyMember = await prisma.facultyMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FacultyMemberUpdateManyArgs>(args: SelectSubset<T, FacultyMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FacultyMembers and returns the data updated in the database.
     * @param {FacultyMemberUpdateManyAndReturnArgs} args - Arguments to update many FacultyMembers.
     * @example
     * // Update many FacultyMembers
     * const facultyMember = await prisma.facultyMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FacultyMembers and only return the `id`
     * const facultyMemberWithIdOnly = await prisma.facultyMember.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FacultyMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, FacultyMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacultyMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FacultyMember.
     * @param {FacultyMemberUpsertArgs} args - Arguments to update or create a FacultyMember.
     * @example
     * // Update or create a FacultyMember
     * const facultyMember = await prisma.facultyMember.upsert({
     *   create: {
     *     // ... data to create a FacultyMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FacultyMember we want to update
     *   }
     * })
     */
    upsert<T extends FacultyMemberUpsertArgs>(args: SelectSubset<T, FacultyMemberUpsertArgs<ExtArgs>>): Prisma__FacultyMemberClient<$Result.GetResult<Prisma.$FacultyMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FacultyMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyMemberCountArgs} args - Arguments to filter FacultyMembers to count.
     * @example
     * // Count the number of FacultyMembers
     * const count = await prisma.facultyMember.count({
     *   where: {
     *     // ... the filter for the FacultyMembers we want to count
     *   }
     * })
    **/
    count<T extends FacultyMemberCountArgs>(
      args?: Subset<T, FacultyMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FacultyMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FacultyMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FacultyMemberAggregateArgs>(args: Subset<T, FacultyMemberAggregateArgs>): Prisma.PrismaPromise<GetFacultyMemberAggregateType<T>>

    /**
     * Group by FacultyMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyMemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FacultyMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FacultyMemberGroupByArgs['orderBy'] }
        : { orderBy?: FacultyMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FacultyMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacultyMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FacultyMember model
   */
  readonly fields: FacultyMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FacultyMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FacultyMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FacultyMember model
   */
  interface FacultyMemberFieldRefs {
    readonly id: FieldRef<"FacultyMember", 'String'>
    readonly firstName: FieldRef<"FacultyMember", 'String'>
    readonly lastName: FieldRef<"FacultyMember", 'String'>
    readonly email: FieldRef<"FacultyMember", 'String'>
    readonly contactNumber: FieldRef<"FacultyMember", 'String'>
    readonly profileImageUrl: FieldRef<"FacultyMember", 'String'>
    readonly imageKey: FieldRef<"FacultyMember", 'String'>
    readonly designation: FieldRef<"FacultyMember", 'String'>
    readonly isHod: FieldRef<"FacultyMember", 'Boolean'>
    readonly facultyType: FieldRef<"FacultyMember", 'FacultyType'>
    readonly cvUrl: FieldRef<"FacultyMember", 'String'>
    readonly pdfKey: FieldRef<"FacultyMember", 'String'>
    readonly socialLinks: FieldRef<"FacultyMember", 'Json'>
    readonly createdAt: FieldRef<"FacultyMember", 'DateTime'>
    readonly updatedAt: FieldRef<"FacultyMember", 'DateTime'>
    readonly department: FieldRef<"FacultyMember", 'Departments'>
  }
    

  // Custom InputTypes
  /**
   * FacultyMember findUnique
   */
  export type FacultyMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyMember
     */
    select?: FacultyMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacultyMember
     */
    omit?: FacultyMemberOmit<ExtArgs> | null
    /**
     * Filter, which FacultyMember to fetch.
     */
    where: FacultyMemberWhereUniqueInput
  }

  /**
   * FacultyMember findUniqueOrThrow
   */
  export type FacultyMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyMember
     */
    select?: FacultyMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacultyMember
     */
    omit?: FacultyMemberOmit<ExtArgs> | null
    /**
     * Filter, which FacultyMember to fetch.
     */
    where: FacultyMemberWhereUniqueInput
  }

  /**
   * FacultyMember findFirst
   */
  export type FacultyMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyMember
     */
    select?: FacultyMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacultyMember
     */
    omit?: FacultyMemberOmit<ExtArgs> | null
    /**
     * Filter, which FacultyMember to fetch.
     */
    where?: FacultyMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacultyMembers to fetch.
     */
    orderBy?: FacultyMemberOrderByWithRelationInput | FacultyMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FacultyMembers.
     */
    cursor?: FacultyMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacultyMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacultyMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacultyMembers.
     */
    distinct?: FacultyMemberScalarFieldEnum | FacultyMemberScalarFieldEnum[]
  }

  /**
   * FacultyMember findFirstOrThrow
   */
  export type FacultyMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyMember
     */
    select?: FacultyMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacultyMember
     */
    omit?: FacultyMemberOmit<ExtArgs> | null
    /**
     * Filter, which FacultyMember to fetch.
     */
    where?: FacultyMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacultyMembers to fetch.
     */
    orderBy?: FacultyMemberOrderByWithRelationInput | FacultyMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FacultyMembers.
     */
    cursor?: FacultyMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacultyMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacultyMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacultyMembers.
     */
    distinct?: FacultyMemberScalarFieldEnum | FacultyMemberScalarFieldEnum[]
  }

  /**
   * FacultyMember findMany
   */
  export type FacultyMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyMember
     */
    select?: FacultyMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacultyMember
     */
    omit?: FacultyMemberOmit<ExtArgs> | null
    /**
     * Filter, which FacultyMembers to fetch.
     */
    where?: FacultyMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacultyMembers to fetch.
     */
    orderBy?: FacultyMemberOrderByWithRelationInput | FacultyMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FacultyMembers.
     */
    cursor?: FacultyMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacultyMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacultyMembers.
     */
    skip?: number
    distinct?: FacultyMemberScalarFieldEnum | FacultyMemberScalarFieldEnum[]
  }

  /**
   * FacultyMember create
   */
  export type FacultyMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyMember
     */
    select?: FacultyMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacultyMember
     */
    omit?: FacultyMemberOmit<ExtArgs> | null
    /**
     * The data needed to create a FacultyMember.
     */
    data: XOR<FacultyMemberCreateInput, FacultyMemberUncheckedCreateInput>
  }

  /**
   * FacultyMember createMany
   */
  export type FacultyMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FacultyMembers.
     */
    data: FacultyMemberCreateManyInput | FacultyMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FacultyMember createManyAndReturn
   */
  export type FacultyMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyMember
     */
    select?: FacultyMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FacultyMember
     */
    omit?: FacultyMemberOmit<ExtArgs> | null
    /**
     * The data used to create many FacultyMembers.
     */
    data: FacultyMemberCreateManyInput | FacultyMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FacultyMember update
   */
  export type FacultyMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyMember
     */
    select?: FacultyMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacultyMember
     */
    omit?: FacultyMemberOmit<ExtArgs> | null
    /**
     * The data needed to update a FacultyMember.
     */
    data: XOR<FacultyMemberUpdateInput, FacultyMemberUncheckedUpdateInput>
    /**
     * Choose, which FacultyMember to update.
     */
    where: FacultyMemberWhereUniqueInput
  }

  /**
   * FacultyMember updateMany
   */
  export type FacultyMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FacultyMembers.
     */
    data: XOR<FacultyMemberUpdateManyMutationInput, FacultyMemberUncheckedUpdateManyInput>
    /**
     * Filter which FacultyMembers to update
     */
    where?: FacultyMemberWhereInput
    /**
     * Limit how many FacultyMembers to update.
     */
    limit?: number
  }

  /**
   * FacultyMember updateManyAndReturn
   */
  export type FacultyMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyMember
     */
    select?: FacultyMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FacultyMember
     */
    omit?: FacultyMemberOmit<ExtArgs> | null
    /**
     * The data used to update FacultyMembers.
     */
    data: XOR<FacultyMemberUpdateManyMutationInput, FacultyMemberUncheckedUpdateManyInput>
    /**
     * Filter which FacultyMembers to update
     */
    where?: FacultyMemberWhereInput
    /**
     * Limit how many FacultyMembers to update.
     */
    limit?: number
  }

  /**
   * FacultyMember upsert
   */
  export type FacultyMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyMember
     */
    select?: FacultyMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacultyMember
     */
    omit?: FacultyMemberOmit<ExtArgs> | null
    /**
     * The filter to search for the FacultyMember to update in case it exists.
     */
    where: FacultyMemberWhereUniqueInput
    /**
     * In case the FacultyMember found by the `where` argument doesn't exist, create a new FacultyMember with this data.
     */
    create: XOR<FacultyMemberCreateInput, FacultyMemberUncheckedCreateInput>
    /**
     * In case the FacultyMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FacultyMemberUpdateInput, FacultyMemberUncheckedUpdateInput>
  }

  /**
   * FacultyMember delete
   */
  export type FacultyMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyMember
     */
    select?: FacultyMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacultyMember
     */
    omit?: FacultyMemberOmit<ExtArgs> | null
    /**
     * Filter which FacultyMember to delete.
     */
    where: FacultyMemberWhereUniqueInput
  }

  /**
   * FacultyMember deleteMany
   */
  export type FacultyMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FacultyMembers to delete
     */
    where?: FacultyMemberWhereInput
    /**
     * Limit how many FacultyMembers to delete.
     */
    limit?: number
  }

  /**
   * FacultyMember without action
   */
  export type FacultyMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyMember
     */
    select?: FacultyMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacultyMember
     */
    omit?: FacultyMemberOmit<ExtArgs> | null
  }


  /**
   * Model NewsUpdate
   */

  export type AggregateNewsUpdate = {
    _count: NewsUpdateCountAggregateOutputType | null
    _min: NewsUpdateMinAggregateOutputType | null
    _max: NewsUpdateMaxAggregateOutputType | null
  }

  export type NewsUpdateMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    publishDate: Date | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NewsUpdateMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    publishDate: Date | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NewsUpdateCountAggregateOutputType = {
    id: number
    title: number
    description: number
    publishDate: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NewsUpdateMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    publishDate?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NewsUpdateMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    publishDate?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NewsUpdateCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    publishDate?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NewsUpdateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsUpdate to aggregate.
     */
    where?: NewsUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsUpdates to fetch.
     */
    orderBy?: NewsUpdateOrderByWithRelationInput | NewsUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsUpdates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NewsUpdates
    **/
    _count?: true | NewsUpdateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsUpdateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsUpdateMaxAggregateInputType
  }

  export type GetNewsUpdateAggregateType<T extends NewsUpdateAggregateArgs> = {
        [P in keyof T & keyof AggregateNewsUpdate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNewsUpdate[P]>
      : GetScalarType<T[P], AggregateNewsUpdate[P]>
  }




  export type NewsUpdateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsUpdateWhereInput
    orderBy?: NewsUpdateOrderByWithAggregationInput | NewsUpdateOrderByWithAggregationInput[]
    by: NewsUpdateScalarFieldEnum[] | NewsUpdateScalarFieldEnum
    having?: NewsUpdateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsUpdateCountAggregateInputType | true
    _min?: NewsUpdateMinAggregateInputType
    _max?: NewsUpdateMaxAggregateInputType
  }

  export type NewsUpdateGroupByOutputType = {
    id: string
    title: string
    description: string
    publishDate: Date
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: NewsUpdateCountAggregateOutputType | null
    _min: NewsUpdateMinAggregateOutputType | null
    _max: NewsUpdateMaxAggregateOutputType | null
  }

  type GetNewsUpdateGroupByPayload<T extends NewsUpdateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsUpdateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsUpdateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsUpdateGroupByOutputType[P]>
            : GetScalarType<T[P], NewsUpdateGroupByOutputType[P]>
        }
      >
    >


  export type NewsUpdateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    publishDate?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["newsUpdate"]>

  export type NewsUpdateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    publishDate?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["newsUpdate"]>

  export type NewsUpdateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    publishDate?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["newsUpdate"]>

  export type NewsUpdateSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    publishDate?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NewsUpdateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "publishDate" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["newsUpdate"]>

  export type $NewsUpdatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NewsUpdate"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      publishDate: Date
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["newsUpdate"]>
    composites: {}
  }

  type NewsUpdateGetPayload<S extends boolean | null | undefined | NewsUpdateDefaultArgs> = $Result.GetResult<Prisma.$NewsUpdatePayload, S>

  type NewsUpdateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NewsUpdateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NewsUpdateCountAggregateInputType | true
    }

  export interface NewsUpdateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NewsUpdate'], meta: { name: 'NewsUpdate' } }
    /**
     * Find zero or one NewsUpdate that matches the filter.
     * @param {NewsUpdateFindUniqueArgs} args - Arguments to find a NewsUpdate
     * @example
     * // Get one NewsUpdate
     * const newsUpdate = await prisma.newsUpdate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsUpdateFindUniqueArgs>(args: SelectSubset<T, NewsUpdateFindUniqueArgs<ExtArgs>>): Prisma__NewsUpdateClient<$Result.GetResult<Prisma.$NewsUpdatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NewsUpdate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NewsUpdateFindUniqueOrThrowArgs} args - Arguments to find a NewsUpdate
     * @example
     * // Get one NewsUpdate
     * const newsUpdate = await prisma.newsUpdate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsUpdateFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsUpdateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsUpdateClient<$Result.GetResult<Prisma.$NewsUpdatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsUpdate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsUpdateFindFirstArgs} args - Arguments to find a NewsUpdate
     * @example
     * // Get one NewsUpdate
     * const newsUpdate = await prisma.newsUpdate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsUpdateFindFirstArgs>(args?: SelectSubset<T, NewsUpdateFindFirstArgs<ExtArgs>>): Prisma__NewsUpdateClient<$Result.GetResult<Prisma.$NewsUpdatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsUpdate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsUpdateFindFirstOrThrowArgs} args - Arguments to find a NewsUpdate
     * @example
     * // Get one NewsUpdate
     * const newsUpdate = await prisma.newsUpdate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsUpdateFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsUpdateFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsUpdateClient<$Result.GetResult<Prisma.$NewsUpdatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NewsUpdates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsUpdateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NewsUpdates
     * const newsUpdates = await prisma.newsUpdate.findMany()
     * 
     * // Get first 10 NewsUpdates
     * const newsUpdates = await prisma.newsUpdate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newsUpdateWithIdOnly = await prisma.newsUpdate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewsUpdateFindManyArgs>(args?: SelectSubset<T, NewsUpdateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsUpdatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NewsUpdate.
     * @param {NewsUpdateCreateArgs} args - Arguments to create a NewsUpdate.
     * @example
     * // Create one NewsUpdate
     * const NewsUpdate = await prisma.newsUpdate.create({
     *   data: {
     *     // ... data to create a NewsUpdate
     *   }
     * })
     * 
     */
    create<T extends NewsUpdateCreateArgs>(args: SelectSubset<T, NewsUpdateCreateArgs<ExtArgs>>): Prisma__NewsUpdateClient<$Result.GetResult<Prisma.$NewsUpdatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NewsUpdates.
     * @param {NewsUpdateCreateManyArgs} args - Arguments to create many NewsUpdates.
     * @example
     * // Create many NewsUpdates
     * const newsUpdate = await prisma.newsUpdate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsUpdateCreateManyArgs>(args?: SelectSubset<T, NewsUpdateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NewsUpdates and returns the data saved in the database.
     * @param {NewsUpdateCreateManyAndReturnArgs} args - Arguments to create many NewsUpdates.
     * @example
     * // Create many NewsUpdates
     * const newsUpdate = await prisma.newsUpdate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NewsUpdates and only return the `id`
     * const newsUpdateWithIdOnly = await prisma.newsUpdate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NewsUpdateCreateManyAndReturnArgs>(args?: SelectSubset<T, NewsUpdateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsUpdatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NewsUpdate.
     * @param {NewsUpdateDeleteArgs} args - Arguments to delete one NewsUpdate.
     * @example
     * // Delete one NewsUpdate
     * const NewsUpdate = await prisma.newsUpdate.delete({
     *   where: {
     *     // ... filter to delete one NewsUpdate
     *   }
     * })
     * 
     */
    delete<T extends NewsUpdateDeleteArgs>(args: SelectSubset<T, NewsUpdateDeleteArgs<ExtArgs>>): Prisma__NewsUpdateClient<$Result.GetResult<Prisma.$NewsUpdatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NewsUpdate.
     * @param {NewsUpdateUpdateArgs} args - Arguments to update one NewsUpdate.
     * @example
     * // Update one NewsUpdate
     * const newsUpdate = await prisma.newsUpdate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsUpdateUpdateArgs>(args: SelectSubset<T, NewsUpdateUpdateArgs<ExtArgs>>): Prisma__NewsUpdateClient<$Result.GetResult<Prisma.$NewsUpdatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NewsUpdates.
     * @param {NewsUpdateDeleteManyArgs} args - Arguments to filter NewsUpdates to delete.
     * @example
     * // Delete a few NewsUpdates
     * const { count } = await prisma.newsUpdate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsUpdateDeleteManyArgs>(args?: SelectSubset<T, NewsUpdateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsUpdates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsUpdateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NewsUpdates
     * const newsUpdate = await prisma.newsUpdate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsUpdateUpdateManyArgs>(args: SelectSubset<T, NewsUpdateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsUpdates and returns the data updated in the database.
     * @param {NewsUpdateUpdateManyAndReturnArgs} args - Arguments to update many NewsUpdates.
     * @example
     * // Update many NewsUpdates
     * const newsUpdate = await prisma.newsUpdate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NewsUpdates and only return the `id`
     * const newsUpdateWithIdOnly = await prisma.newsUpdate.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NewsUpdateUpdateManyAndReturnArgs>(args: SelectSubset<T, NewsUpdateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsUpdatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NewsUpdate.
     * @param {NewsUpdateUpsertArgs} args - Arguments to update or create a NewsUpdate.
     * @example
     * // Update or create a NewsUpdate
     * const newsUpdate = await prisma.newsUpdate.upsert({
     *   create: {
     *     // ... data to create a NewsUpdate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NewsUpdate we want to update
     *   }
     * })
     */
    upsert<T extends NewsUpdateUpsertArgs>(args: SelectSubset<T, NewsUpdateUpsertArgs<ExtArgs>>): Prisma__NewsUpdateClient<$Result.GetResult<Prisma.$NewsUpdatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NewsUpdates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsUpdateCountArgs} args - Arguments to filter NewsUpdates to count.
     * @example
     * // Count the number of NewsUpdates
     * const count = await prisma.newsUpdate.count({
     *   where: {
     *     // ... the filter for the NewsUpdates we want to count
     *   }
     * })
    **/
    count<T extends NewsUpdateCountArgs>(
      args?: Subset<T, NewsUpdateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsUpdateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NewsUpdate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsUpdateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NewsUpdateAggregateArgs>(args: Subset<T, NewsUpdateAggregateArgs>): Prisma.PrismaPromise<GetNewsUpdateAggregateType<T>>

    /**
     * Group by NewsUpdate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsUpdateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NewsUpdateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsUpdateGroupByArgs['orderBy'] }
        : { orderBy?: NewsUpdateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NewsUpdateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsUpdateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NewsUpdate model
   */
  readonly fields: NewsUpdateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NewsUpdate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsUpdateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NewsUpdate model
   */
  interface NewsUpdateFieldRefs {
    readonly id: FieldRef<"NewsUpdate", 'String'>
    readonly title: FieldRef<"NewsUpdate", 'String'>
    readonly description: FieldRef<"NewsUpdate", 'String'>
    readonly publishDate: FieldRef<"NewsUpdate", 'DateTime'>
    readonly isActive: FieldRef<"NewsUpdate", 'Boolean'>
    readonly createdAt: FieldRef<"NewsUpdate", 'DateTime'>
    readonly updatedAt: FieldRef<"NewsUpdate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NewsUpdate findUnique
   */
  export type NewsUpdateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsUpdate
     */
    select?: NewsUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsUpdate
     */
    omit?: NewsUpdateOmit<ExtArgs> | null
    /**
     * Filter, which NewsUpdate to fetch.
     */
    where: NewsUpdateWhereUniqueInput
  }

  /**
   * NewsUpdate findUniqueOrThrow
   */
  export type NewsUpdateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsUpdate
     */
    select?: NewsUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsUpdate
     */
    omit?: NewsUpdateOmit<ExtArgs> | null
    /**
     * Filter, which NewsUpdate to fetch.
     */
    where: NewsUpdateWhereUniqueInput
  }

  /**
   * NewsUpdate findFirst
   */
  export type NewsUpdateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsUpdate
     */
    select?: NewsUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsUpdate
     */
    omit?: NewsUpdateOmit<ExtArgs> | null
    /**
     * Filter, which NewsUpdate to fetch.
     */
    where?: NewsUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsUpdates to fetch.
     */
    orderBy?: NewsUpdateOrderByWithRelationInput | NewsUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsUpdates.
     */
    cursor?: NewsUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsUpdates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsUpdates.
     */
    distinct?: NewsUpdateScalarFieldEnum | NewsUpdateScalarFieldEnum[]
  }

  /**
   * NewsUpdate findFirstOrThrow
   */
  export type NewsUpdateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsUpdate
     */
    select?: NewsUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsUpdate
     */
    omit?: NewsUpdateOmit<ExtArgs> | null
    /**
     * Filter, which NewsUpdate to fetch.
     */
    where?: NewsUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsUpdates to fetch.
     */
    orderBy?: NewsUpdateOrderByWithRelationInput | NewsUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsUpdates.
     */
    cursor?: NewsUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsUpdates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsUpdates.
     */
    distinct?: NewsUpdateScalarFieldEnum | NewsUpdateScalarFieldEnum[]
  }

  /**
   * NewsUpdate findMany
   */
  export type NewsUpdateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsUpdate
     */
    select?: NewsUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsUpdate
     */
    omit?: NewsUpdateOmit<ExtArgs> | null
    /**
     * Filter, which NewsUpdates to fetch.
     */
    where?: NewsUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsUpdates to fetch.
     */
    orderBy?: NewsUpdateOrderByWithRelationInput | NewsUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NewsUpdates.
     */
    cursor?: NewsUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsUpdates.
     */
    skip?: number
    distinct?: NewsUpdateScalarFieldEnum | NewsUpdateScalarFieldEnum[]
  }

  /**
   * NewsUpdate create
   */
  export type NewsUpdateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsUpdate
     */
    select?: NewsUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsUpdate
     */
    omit?: NewsUpdateOmit<ExtArgs> | null
    /**
     * The data needed to create a NewsUpdate.
     */
    data: XOR<NewsUpdateCreateInput, NewsUpdateUncheckedCreateInput>
  }

  /**
   * NewsUpdate createMany
   */
  export type NewsUpdateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NewsUpdates.
     */
    data: NewsUpdateCreateManyInput | NewsUpdateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewsUpdate createManyAndReturn
   */
  export type NewsUpdateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsUpdate
     */
    select?: NewsUpdateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsUpdate
     */
    omit?: NewsUpdateOmit<ExtArgs> | null
    /**
     * The data used to create many NewsUpdates.
     */
    data: NewsUpdateCreateManyInput | NewsUpdateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewsUpdate update
   */
  export type NewsUpdateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsUpdate
     */
    select?: NewsUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsUpdate
     */
    omit?: NewsUpdateOmit<ExtArgs> | null
    /**
     * The data needed to update a NewsUpdate.
     */
    data: XOR<NewsUpdateUpdateInput, NewsUpdateUncheckedUpdateInput>
    /**
     * Choose, which NewsUpdate to update.
     */
    where: NewsUpdateWhereUniqueInput
  }

  /**
   * NewsUpdate updateMany
   */
  export type NewsUpdateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NewsUpdates.
     */
    data: XOR<NewsUpdateUpdateManyMutationInput, NewsUpdateUncheckedUpdateManyInput>
    /**
     * Filter which NewsUpdates to update
     */
    where?: NewsUpdateWhereInput
    /**
     * Limit how many NewsUpdates to update.
     */
    limit?: number
  }

  /**
   * NewsUpdate updateManyAndReturn
   */
  export type NewsUpdateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsUpdate
     */
    select?: NewsUpdateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsUpdate
     */
    omit?: NewsUpdateOmit<ExtArgs> | null
    /**
     * The data used to update NewsUpdates.
     */
    data: XOR<NewsUpdateUpdateManyMutationInput, NewsUpdateUncheckedUpdateManyInput>
    /**
     * Filter which NewsUpdates to update
     */
    where?: NewsUpdateWhereInput
    /**
     * Limit how many NewsUpdates to update.
     */
    limit?: number
  }

  /**
   * NewsUpdate upsert
   */
  export type NewsUpdateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsUpdate
     */
    select?: NewsUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsUpdate
     */
    omit?: NewsUpdateOmit<ExtArgs> | null
    /**
     * The filter to search for the NewsUpdate to update in case it exists.
     */
    where: NewsUpdateWhereUniqueInput
    /**
     * In case the NewsUpdate found by the `where` argument doesn't exist, create a new NewsUpdate with this data.
     */
    create: XOR<NewsUpdateCreateInput, NewsUpdateUncheckedCreateInput>
    /**
     * In case the NewsUpdate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsUpdateUpdateInput, NewsUpdateUncheckedUpdateInput>
  }

  /**
   * NewsUpdate delete
   */
  export type NewsUpdateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsUpdate
     */
    select?: NewsUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsUpdate
     */
    omit?: NewsUpdateOmit<ExtArgs> | null
    /**
     * Filter which NewsUpdate to delete.
     */
    where: NewsUpdateWhereUniqueInput
  }

  /**
   * NewsUpdate deleteMany
   */
  export type NewsUpdateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsUpdates to delete
     */
    where?: NewsUpdateWhereInput
    /**
     * Limit how many NewsUpdates to delete.
     */
    limit?: number
  }

  /**
   * NewsUpdate without action
   */
  export type NewsUpdateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsUpdate
     */
    select?: NewsUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsUpdate
     */
    omit?: NewsUpdateOmit<ExtArgs> | null
  }


  /**
   * Model Advertisement
   */

  export type AggregateAdvertisement = {
    _count: AdvertisementCountAggregateOutputType | null
    _min: AdvertisementMinAggregateOutputType | null
    _max: AdvertisementMaxAggregateOutputType | null
  }

  export type AdvertisementMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    department: string | null
    deadlineDate: Date | null
    pdfUrl: string | null
    pdfKey: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdvertisementMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    department: string | null
    deadlineDate: Date | null
    pdfUrl: string | null
    pdfKey: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdvertisementCountAggregateOutputType = {
    id: number
    title: number
    description: number
    department: number
    deadlineDate: number
    pdfUrl: number
    pdfKey: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdvertisementMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    department?: true
    deadlineDate?: true
    pdfUrl?: true
    pdfKey?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdvertisementMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    department?: true
    deadlineDate?: true
    pdfUrl?: true
    pdfKey?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdvertisementCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    department?: true
    deadlineDate?: true
    pdfUrl?: true
    pdfKey?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdvertisementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Advertisement to aggregate.
     */
    where?: AdvertisementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Advertisements to fetch.
     */
    orderBy?: AdvertisementOrderByWithRelationInput | AdvertisementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdvertisementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Advertisements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Advertisements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Advertisements
    **/
    _count?: true | AdvertisementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdvertisementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdvertisementMaxAggregateInputType
  }

  export type GetAdvertisementAggregateType<T extends AdvertisementAggregateArgs> = {
        [P in keyof T & keyof AggregateAdvertisement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdvertisement[P]>
      : GetScalarType<T[P], AggregateAdvertisement[P]>
  }




  export type AdvertisementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdvertisementWhereInput
    orderBy?: AdvertisementOrderByWithAggregationInput | AdvertisementOrderByWithAggregationInput[]
    by: AdvertisementScalarFieldEnum[] | AdvertisementScalarFieldEnum
    having?: AdvertisementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdvertisementCountAggregateInputType | true
    _min?: AdvertisementMinAggregateInputType
    _max?: AdvertisementMaxAggregateInputType
  }

  export type AdvertisementGroupByOutputType = {
    id: string
    title: string
    description: string | null
    department: string
    deadlineDate: Date | null
    pdfUrl: string | null
    pdfKey: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: AdvertisementCountAggregateOutputType | null
    _min: AdvertisementMinAggregateOutputType | null
    _max: AdvertisementMaxAggregateOutputType | null
  }

  type GetAdvertisementGroupByPayload<T extends AdvertisementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdvertisementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdvertisementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdvertisementGroupByOutputType[P]>
            : GetScalarType<T[P], AdvertisementGroupByOutputType[P]>
        }
      >
    >


  export type AdvertisementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    department?: boolean
    deadlineDate?: boolean
    pdfUrl?: boolean
    pdfKey?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["advertisement"]>

  export type AdvertisementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    department?: boolean
    deadlineDate?: boolean
    pdfUrl?: boolean
    pdfKey?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["advertisement"]>

  export type AdvertisementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    department?: boolean
    deadlineDate?: boolean
    pdfUrl?: boolean
    pdfKey?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["advertisement"]>

  export type AdvertisementSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    department?: boolean
    deadlineDate?: boolean
    pdfUrl?: boolean
    pdfKey?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdvertisementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "department" | "deadlineDate" | "pdfUrl" | "pdfKey" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["advertisement"]>

  export type $AdvertisementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Advertisement"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      department: string
      deadlineDate: Date | null
      pdfUrl: string | null
      pdfKey: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["advertisement"]>
    composites: {}
  }

  type AdvertisementGetPayload<S extends boolean | null | undefined | AdvertisementDefaultArgs> = $Result.GetResult<Prisma.$AdvertisementPayload, S>

  type AdvertisementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdvertisementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdvertisementCountAggregateInputType | true
    }

  export interface AdvertisementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Advertisement'], meta: { name: 'Advertisement' } }
    /**
     * Find zero or one Advertisement that matches the filter.
     * @param {AdvertisementFindUniqueArgs} args - Arguments to find a Advertisement
     * @example
     * // Get one Advertisement
     * const advertisement = await prisma.advertisement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdvertisementFindUniqueArgs>(args: SelectSubset<T, AdvertisementFindUniqueArgs<ExtArgs>>): Prisma__AdvertisementClient<$Result.GetResult<Prisma.$AdvertisementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Advertisement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdvertisementFindUniqueOrThrowArgs} args - Arguments to find a Advertisement
     * @example
     * // Get one Advertisement
     * const advertisement = await prisma.advertisement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdvertisementFindUniqueOrThrowArgs>(args: SelectSubset<T, AdvertisementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdvertisementClient<$Result.GetResult<Prisma.$AdvertisementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Advertisement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvertisementFindFirstArgs} args - Arguments to find a Advertisement
     * @example
     * // Get one Advertisement
     * const advertisement = await prisma.advertisement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdvertisementFindFirstArgs>(args?: SelectSubset<T, AdvertisementFindFirstArgs<ExtArgs>>): Prisma__AdvertisementClient<$Result.GetResult<Prisma.$AdvertisementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Advertisement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvertisementFindFirstOrThrowArgs} args - Arguments to find a Advertisement
     * @example
     * // Get one Advertisement
     * const advertisement = await prisma.advertisement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdvertisementFindFirstOrThrowArgs>(args?: SelectSubset<T, AdvertisementFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdvertisementClient<$Result.GetResult<Prisma.$AdvertisementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Advertisements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvertisementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Advertisements
     * const advertisements = await prisma.advertisement.findMany()
     * 
     * // Get first 10 Advertisements
     * const advertisements = await prisma.advertisement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const advertisementWithIdOnly = await prisma.advertisement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdvertisementFindManyArgs>(args?: SelectSubset<T, AdvertisementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdvertisementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Advertisement.
     * @param {AdvertisementCreateArgs} args - Arguments to create a Advertisement.
     * @example
     * // Create one Advertisement
     * const Advertisement = await prisma.advertisement.create({
     *   data: {
     *     // ... data to create a Advertisement
     *   }
     * })
     * 
     */
    create<T extends AdvertisementCreateArgs>(args: SelectSubset<T, AdvertisementCreateArgs<ExtArgs>>): Prisma__AdvertisementClient<$Result.GetResult<Prisma.$AdvertisementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Advertisements.
     * @param {AdvertisementCreateManyArgs} args - Arguments to create many Advertisements.
     * @example
     * // Create many Advertisements
     * const advertisement = await prisma.advertisement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdvertisementCreateManyArgs>(args?: SelectSubset<T, AdvertisementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Advertisements and returns the data saved in the database.
     * @param {AdvertisementCreateManyAndReturnArgs} args - Arguments to create many Advertisements.
     * @example
     * // Create many Advertisements
     * const advertisement = await prisma.advertisement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Advertisements and only return the `id`
     * const advertisementWithIdOnly = await prisma.advertisement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdvertisementCreateManyAndReturnArgs>(args?: SelectSubset<T, AdvertisementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdvertisementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Advertisement.
     * @param {AdvertisementDeleteArgs} args - Arguments to delete one Advertisement.
     * @example
     * // Delete one Advertisement
     * const Advertisement = await prisma.advertisement.delete({
     *   where: {
     *     // ... filter to delete one Advertisement
     *   }
     * })
     * 
     */
    delete<T extends AdvertisementDeleteArgs>(args: SelectSubset<T, AdvertisementDeleteArgs<ExtArgs>>): Prisma__AdvertisementClient<$Result.GetResult<Prisma.$AdvertisementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Advertisement.
     * @param {AdvertisementUpdateArgs} args - Arguments to update one Advertisement.
     * @example
     * // Update one Advertisement
     * const advertisement = await prisma.advertisement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdvertisementUpdateArgs>(args: SelectSubset<T, AdvertisementUpdateArgs<ExtArgs>>): Prisma__AdvertisementClient<$Result.GetResult<Prisma.$AdvertisementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Advertisements.
     * @param {AdvertisementDeleteManyArgs} args - Arguments to filter Advertisements to delete.
     * @example
     * // Delete a few Advertisements
     * const { count } = await prisma.advertisement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdvertisementDeleteManyArgs>(args?: SelectSubset<T, AdvertisementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Advertisements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvertisementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Advertisements
     * const advertisement = await prisma.advertisement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdvertisementUpdateManyArgs>(args: SelectSubset<T, AdvertisementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Advertisements and returns the data updated in the database.
     * @param {AdvertisementUpdateManyAndReturnArgs} args - Arguments to update many Advertisements.
     * @example
     * // Update many Advertisements
     * const advertisement = await prisma.advertisement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Advertisements and only return the `id`
     * const advertisementWithIdOnly = await prisma.advertisement.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdvertisementUpdateManyAndReturnArgs>(args: SelectSubset<T, AdvertisementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdvertisementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Advertisement.
     * @param {AdvertisementUpsertArgs} args - Arguments to update or create a Advertisement.
     * @example
     * // Update or create a Advertisement
     * const advertisement = await prisma.advertisement.upsert({
     *   create: {
     *     // ... data to create a Advertisement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Advertisement we want to update
     *   }
     * })
     */
    upsert<T extends AdvertisementUpsertArgs>(args: SelectSubset<T, AdvertisementUpsertArgs<ExtArgs>>): Prisma__AdvertisementClient<$Result.GetResult<Prisma.$AdvertisementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Advertisements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvertisementCountArgs} args - Arguments to filter Advertisements to count.
     * @example
     * // Count the number of Advertisements
     * const count = await prisma.advertisement.count({
     *   where: {
     *     // ... the filter for the Advertisements we want to count
     *   }
     * })
    **/
    count<T extends AdvertisementCountArgs>(
      args?: Subset<T, AdvertisementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdvertisementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Advertisement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvertisementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdvertisementAggregateArgs>(args: Subset<T, AdvertisementAggregateArgs>): Prisma.PrismaPromise<GetAdvertisementAggregateType<T>>

    /**
     * Group by Advertisement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvertisementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdvertisementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdvertisementGroupByArgs['orderBy'] }
        : { orderBy?: AdvertisementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdvertisementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdvertisementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Advertisement model
   */
  readonly fields: AdvertisementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Advertisement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdvertisementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Advertisement model
   */
  interface AdvertisementFieldRefs {
    readonly id: FieldRef<"Advertisement", 'String'>
    readonly title: FieldRef<"Advertisement", 'String'>
    readonly description: FieldRef<"Advertisement", 'String'>
    readonly department: FieldRef<"Advertisement", 'String'>
    readonly deadlineDate: FieldRef<"Advertisement", 'DateTime'>
    readonly pdfUrl: FieldRef<"Advertisement", 'String'>
    readonly pdfKey: FieldRef<"Advertisement", 'String'>
    readonly isActive: FieldRef<"Advertisement", 'Boolean'>
    readonly createdAt: FieldRef<"Advertisement", 'DateTime'>
    readonly updatedAt: FieldRef<"Advertisement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Advertisement findUnique
   */
  export type AdvertisementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advertisement
     */
    select?: AdvertisementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advertisement
     */
    omit?: AdvertisementOmit<ExtArgs> | null
    /**
     * Filter, which Advertisement to fetch.
     */
    where: AdvertisementWhereUniqueInput
  }

  /**
   * Advertisement findUniqueOrThrow
   */
  export type AdvertisementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advertisement
     */
    select?: AdvertisementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advertisement
     */
    omit?: AdvertisementOmit<ExtArgs> | null
    /**
     * Filter, which Advertisement to fetch.
     */
    where: AdvertisementWhereUniqueInput
  }

  /**
   * Advertisement findFirst
   */
  export type AdvertisementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advertisement
     */
    select?: AdvertisementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advertisement
     */
    omit?: AdvertisementOmit<ExtArgs> | null
    /**
     * Filter, which Advertisement to fetch.
     */
    where?: AdvertisementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Advertisements to fetch.
     */
    orderBy?: AdvertisementOrderByWithRelationInput | AdvertisementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Advertisements.
     */
    cursor?: AdvertisementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Advertisements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Advertisements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Advertisements.
     */
    distinct?: AdvertisementScalarFieldEnum | AdvertisementScalarFieldEnum[]
  }

  /**
   * Advertisement findFirstOrThrow
   */
  export type AdvertisementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advertisement
     */
    select?: AdvertisementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advertisement
     */
    omit?: AdvertisementOmit<ExtArgs> | null
    /**
     * Filter, which Advertisement to fetch.
     */
    where?: AdvertisementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Advertisements to fetch.
     */
    orderBy?: AdvertisementOrderByWithRelationInput | AdvertisementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Advertisements.
     */
    cursor?: AdvertisementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Advertisements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Advertisements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Advertisements.
     */
    distinct?: AdvertisementScalarFieldEnum | AdvertisementScalarFieldEnum[]
  }

  /**
   * Advertisement findMany
   */
  export type AdvertisementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advertisement
     */
    select?: AdvertisementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advertisement
     */
    omit?: AdvertisementOmit<ExtArgs> | null
    /**
     * Filter, which Advertisements to fetch.
     */
    where?: AdvertisementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Advertisements to fetch.
     */
    orderBy?: AdvertisementOrderByWithRelationInput | AdvertisementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Advertisements.
     */
    cursor?: AdvertisementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Advertisements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Advertisements.
     */
    skip?: number
    distinct?: AdvertisementScalarFieldEnum | AdvertisementScalarFieldEnum[]
  }

  /**
   * Advertisement create
   */
  export type AdvertisementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advertisement
     */
    select?: AdvertisementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advertisement
     */
    omit?: AdvertisementOmit<ExtArgs> | null
    /**
     * The data needed to create a Advertisement.
     */
    data: XOR<AdvertisementCreateInput, AdvertisementUncheckedCreateInput>
  }

  /**
   * Advertisement createMany
   */
  export type AdvertisementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Advertisements.
     */
    data: AdvertisementCreateManyInput | AdvertisementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Advertisement createManyAndReturn
   */
  export type AdvertisementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advertisement
     */
    select?: AdvertisementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Advertisement
     */
    omit?: AdvertisementOmit<ExtArgs> | null
    /**
     * The data used to create many Advertisements.
     */
    data: AdvertisementCreateManyInput | AdvertisementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Advertisement update
   */
  export type AdvertisementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advertisement
     */
    select?: AdvertisementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advertisement
     */
    omit?: AdvertisementOmit<ExtArgs> | null
    /**
     * The data needed to update a Advertisement.
     */
    data: XOR<AdvertisementUpdateInput, AdvertisementUncheckedUpdateInput>
    /**
     * Choose, which Advertisement to update.
     */
    where: AdvertisementWhereUniqueInput
  }

  /**
   * Advertisement updateMany
   */
  export type AdvertisementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Advertisements.
     */
    data: XOR<AdvertisementUpdateManyMutationInput, AdvertisementUncheckedUpdateManyInput>
    /**
     * Filter which Advertisements to update
     */
    where?: AdvertisementWhereInput
    /**
     * Limit how many Advertisements to update.
     */
    limit?: number
  }

  /**
   * Advertisement updateManyAndReturn
   */
  export type AdvertisementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advertisement
     */
    select?: AdvertisementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Advertisement
     */
    omit?: AdvertisementOmit<ExtArgs> | null
    /**
     * The data used to update Advertisements.
     */
    data: XOR<AdvertisementUpdateManyMutationInput, AdvertisementUncheckedUpdateManyInput>
    /**
     * Filter which Advertisements to update
     */
    where?: AdvertisementWhereInput
    /**
     * Limit how many Advertisements to update.
     */
    limit?: number
  }

  /**
   * Advertisement upsert
   */
  export type AdvertisementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advertisement
     */
    select?: AdvertisementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advertisement
     */
    omit?: AdvertisementOmit<ExtArgs> | null
    /**
     * The filter to search for the Advertisement to update in case it exists.
     */
    where: AdvertisementWhereUniqueInput
    /**
     * In case the Advertisement found by the `where` argument doesn't exist, create a new Advertisement with this data.
     */
    create: XOR<AdvertisementCreateInput, AdvertisementUncheckedCreateInput>
    /**
     * In case the Advertisement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdvertisementUpdateInput, AdvertisementUncheckedUpdateInput>
  }

  /**
   * Advertisement delete
   */
  export type AdvertisementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advertisement
     */
    select?: AdvertisementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advertisement
     */
    omit?: AdvertisementOmit<ExtArgs> | null
    /**
     * Filter which Advertisement to delete.
     */
    where: AdvertisementWhereUniqueInput
  }

  /**
   * Advertisement deleteMany
   */
  export type AdvertisementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Advertisements to delete
     */
    where?: AdvertisementWhereInput
    /**
     * Limit how many Advertisements to delete.
     */
    limit?: number
  }

  /**
   * Advertisement without action
   */
  export type AdvertisementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advertisement
     */
    select?: AdvertisementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advertisement
     */
    omit?: AdvertisementOmit<ExtArgs> | null
  }


  /**
   * Model Tender
   */

  export type AggregateTender = {
    _count: TenderCountAggregateOutputType | null
    _min: TenderMinAggregateOutputType | null
    _max: TenderMaxAggregateOutputType | null
  }

  export type TenderMinAggregateOutputType = {
    id: string | null
    title: string | null
    reference: string | null
    publishedDate: Date | null
    closingDate: Date | null
    category: string | null
    pdfUrl: string | null
    pdfKey: string | null
    status: $Enums.StatusType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TenderMaxAggregateOutputType = {
    id: string | null
    title: string | null
    reference: string | null
    publishedDate: Date | null
    closingDate: Date | null
    category: string | null
    pdfUrl: string | null
    pdfKey: string | null
    status: $Enums.StatusType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TenderCountAggregateOutputType = {
    id: number
    title: number
    reference: number
    publishedDate: number
    closingDate: number
    category: number
    pdfUrl: number
    pdfKey: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TenderMinAggregateInputType = {
    id?: true
    title?: true
    reference?: true
    publishedDate?: true
    closingDate?: true
    category?: true
    pdfUrl?: true
    pdfKey?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TenderMaxAggregateInputType = {
    id?: true
    title?: true
    reference?: true
    publishedDate?: true
    closingDate?: true
    category?: true
    pdfUrl?: true
    pdfKey?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TenderCountAggregateInputType = {
    id?: true
    title?: true
    reference?: true
    publishedDate?: true
    closingDate?: true
    category?: true
    pdfUrl?: true
    pdfKey?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TenderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tender to aggregate.
     */
    where?: TenderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenders to fetch.
     */
    orderBy?: TenderOrderByWithRelationInput | TenderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TenderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tenders
    **/
    _count?: true | TenderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TenderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TenderMaxAggregateInputType
  }

  export type GetTenderAggregateType<T extends TenderAggregateArgs> = {
        [P in keyof T & keyof AggregateTender]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTender[P]>
      : GetScalarType<T[P], AggregateTender[P]>
  }




  export type TenderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TenderWhereInput
    orderBy?: TenderOrderByWithAggregationInput | TenderOrderByWithAggregationInput[]
    by: TenderScalarFieldEnum[] | TenderScalarFieldEnum
    having?: TenderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TenderCountAggregateInputType | true
    _min?: TenderMinAggregateInputType
    _max?: TenderMaxAggregateInputType
  }

  export type TenderGroupByOutputType = {
    id: string
    title: string
    reference: string | null
    publishedDate: Date
    closingDate: Date
    category: string | null
    pdfUrl: string
    pdfKey: string | null
    status: $Enums.StatusType
    createdAt: Date
    updatedAt: Date
    _count: TenderCountAggregateOutputType | null
    _min: TenderMinAggregateOutputType | null
    _max: TenderMaxAggregateOutputType | null
  }

  type GetTenderGroupByPayload<T extends TenderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TenderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TenderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TenderGroupByOutputType[P]>
            : GetScalarType<T[P], TenderGroupByOutputType[P]>
        }
      >
    >


  export type TenderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    reference?: boolean
    publishedDate?: boolean
    closingDate?: boolean
    category?: boolean
    pdfUrl?: boolean
    pdfKey?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tender"]>

  export type TenderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    reference?: boolean
    publishedDate?: boolean
    closingDate?: boolean
    category?: boolean
    pdfUrl?: boolean
    pdfKey?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tender"]>

  export type TenderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    reference?: boolean
    publishedDate?: boolean
    closingDate?: boolean
    category?: boolean
    pdfUrl?: boolean
    pdfKey?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tender"]>

  export type TenderSelectScalar = {
    id?: boolean
    title?: boolean
    reference?: boolean
    publishedDate?: boolean
    closingDate?: boolean
    category?: boolean
    pdfUrl?: boolean
    pdfKey?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TenderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "reference" | "publishedDate" | "closingDate" | "category" | "pdfUrl" | "pdfKey" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["tender"]>

  export type $TenderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tender"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      reference: string | null
      publishedDate: Date
      closingDate: Date
      category: string | null
      pdfUrl: string
      pdfKey: string | null
      status: $Enums.StatusType
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tender"]>
    composites: {}
  }

  type TenderGetPayload<S extends boolean | null | undefined | TenderDefaultArgs> = $Result.GetResult<Prisma.$TenderPayload, S>

  type TenderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TenderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TenderCountAggregateInputType | true
    }

  export interface TenderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tender'], meta: { name: 'Tender' } }
    /**
     * Find zero or one Tender that matches the filter.
     * @param {TenderFindUniqueArgs} args - Arguments to find a Tender
     * @example
     * // Get one Tender
     * const tender = await prisma.tender.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TenderFindUniqueArgs>(args: SelectSubset<T, TenderFindUniqueArgs<ExtArgs>>): Prisma__TenderClient<$Result.GetResult<Prisma.$TenderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tender that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TenderFindUniqueOrThrowArgs} args - Arguments to find a Tender
     * @example
     * // Get one Tender
     * const tender = await prisma.tender.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TenderFindUniqueOrThrowArgs>(args: SelectSubset<T, TenderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TenderClient<$Result.GetResult<Prisma.$TenderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tender that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenderFindFirstArgs} args - Arguments to find a Tender
     * @example
     * // Get one Tender
     * const tender = await prisma.tender.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TenderFindFirstArgs>(args?: SelectSubset<T, TenderFindFirstArgs<ExtArgs>>): Prisma__TenderClient<$Result.GetResult<Prisma.$TenderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tender that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenderFindFirstOrThrowArgs} args - Arguments to find a Tender
     * @example
     * // Get one Tender
     * const tender = await prisma.tender.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TenderFindFirstOrThrowArgs>(args?: SelectSubset<T, TenderFindFirstOrThrowArgs<ExtArgs>>): Prisma__TenderClient<$Result.GetResult<Prisma.$TenderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tenders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tenders
     * const tenders = await prisma.tender.findMany()
     * 
     * // Get first 10 Tenders
     * const tenders = await prisma.tender.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tenderWithIdOnly = await prisma.tender.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TenderFindManyArgs>(args?: SelectSubset<T, TenderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tender.
     * @param {TenderCreateArgs} args - Arguments to create a Tender.
     * @example
     * // Create one Tender
     * const Tender = await prisma.tender.create({
     *   data: {
     *     // ... data to create a Tender
     *   }
     * })
     * 
     */
    create<T extends TenderCreateArgs>(args: SelectSubset<T, TenderCreateArgs<ExtArgs>>): Prisma__TenderClient<$Result.GetResult<Prisma.$TenderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tenders.
     * @param {TenderCreateManyArgs} args - Arguments to create many Tenders.
     * @example
     * // Create many Tenders
     * const tender = await prisma.tender.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TenderCreateManyArgs>(args?: SelectSubset<T, TenderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tenders and returns the data saved in the database.
     * @param {TenderCreateManyAndReturnArgs} args - Arguments to create many Tenders.
     * @example
     * // Create many Tenders
     * const tender = await prisma.tender.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tenders and only return the `id`
     * const tenderWithIdOnly = await prisma.tender.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TenderCreateManyAndReturnArgs>(args?: SelectSubset<T, TenderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tender.
     * @param {TenderDeleteArgs} args - Arguments to delete one Tender.
     * @example
     * // Delete one Tender
     * const Tender = await prisma.tender.delete({
     *   where: {
     *     // ... filter to delete one Tender
     *   }
     * })
     * 
     */
    delete<T extends TenderDeleteArgs>(args: SelectSubset<T, TenderDeleteArgs<ExtArgs>>): Prisma__TenderClient<$Result.GetResult<Prisma.$TenderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tender.
     * @param {TenderUpdateArgs} args - Arguments to update one Tender.
     * @example
     * // Update one Tender
     * const tender = await prisma.tender.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TenderUpdateArgs>(args: SelectSubset<T, TenderUpdateArgs<ExtArgs>>): Prisma__TenderClient<$Result.GetResult<Prisma.$TenderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tenders.
     * @param {TenderDeleteManyArgs} args - Arguments to filter Tenders to delete.
     * @example
     * // Delete a few Tenders
     * const { count } = await prisma.tender.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TenderDeleteManyArgs>(args?: SelectSubset<T, TenderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tenders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tenders
     * const tender = await prisma.tender.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TenderUpdateManyArgs>(args: SelectSubset<T, TenderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tenders and returns the data updated in the database.
     * @param {TenderUpdateManyAndReturnArgs} args - Arguments to update many Tenders.
     * @example
     * // Update many Tenders
     * const tender = await prisma.tender.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tenders and only return the `id`
     * const tenderWithIdOnly = await prisma.tender.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TenderUpdateManyAndReturnArgs>(args: SelectSubset<T, TenderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tender.
     * @param {TenderUpsertArgs} args - Arguments to update or create a Tender.
     * @example
     * // Update or create a Tender
     * const tender = await prisma.tender.upsert({
     *   create: {
     *     // ... data to create a Tender
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tender we want to update
     *   }
     * })
     */
    upsert<T extends TenderUpsertArgs>(args: SelectSubset<T, TenderUpsertArgs<ExtArgs>>): Prisma__TenderClient<$Result.GetResult<Prisma.$TenderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tenders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenderCountArgs} args - Arguments to filter Tenders to count.
     * @example
     * // Count the number of Tenders
     * const count = await prisma.tender.count({
     *   where: {
     *     // ... the filter for the Tenders we want to count
     *   }
     * })
    **/
    count<T extends TenderCountArgs>(
      args?: Subset<T, TenderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TenderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tender.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TenderAggregateArgs>(args: Subset<T, TenderAggregateArgs>): Prisma.PrismaPromise<GetTenderAggregateType<T>>

    /**
     * Group by Tender.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TenderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TenderGroupByArgs['orderBy'] }
        : { orderBy?: TenderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TenderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTenderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tender model
   */
  readonly fields: TenderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tender.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TenderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tender model
   */
  interface TenderFieldRefs {
    readonly id: FieldRef<"Tender", 'String'>
    readonly title: FieldRef<"Tender", 'String'>
    readonly reference: FieldRef<"Tender", 'String'>
    readonly publishedDate: FieldRef<"Tender", 'DateTime'>
    readonly closingDate: FieldRef<"Tender", 'DateTime'>
    readonly category: FieldRef<"Tender", 'String'>
    readonly pdfUrl: FieldRef<"Tender", 'String'>
    readonly pdfKey: FieldRef<"Tender", 'String'>
    readonly status: FieldRef<"Tender", 'StatusType'>
    readonly createdAt: FieldRef<"Tender", 'DateTime'>
    readonly updatedAt: FieldRef<"Tender", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tender findUnique
   */
  export type TenderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tender
     */
    select?: TenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tender
     */
    omit?: TenderOmit<ExtArgs> | null
    /**
     * Filter, which Tender to fetch.
     */
    where: TenderWhereUniqueInput
  }

  /**
   * Tender findUniqueOrThrow
   */
  export type TenderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tender
     */
    select?: TenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tender
     */
    omit?: TenderOmit<ExtArgs> | null
    /**
     * Filter, which Tender to fetch.
     */
    where: TenderWhereUniqueInput
  }

  /**
   * Tender findFirst
   */
  export type TenderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tender
     */
    select?: TenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tender
     */
    omit?: TenderOmit<ExtArgs> | null
    /**
     * Filter, which Tender to fetch.
     */
    where?: TenderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenders to fetch.
     */
    orderBy?: TenderOrderByWithRelationInput | TenderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenders.
     */
    cursor?: TenderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenders.
     */
    distinct?: TenderScalarFieldEnum | TenderScalarFieldEnum[]
  }

  /**
   * Tender findFirstOrThrow
   */
  export type TenderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tender
     */
    select?: TenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tender
     */
    omit?: TenderOmit<ExtArgs> | null
    /**
     * Filter, which Tender to fetch.
     */
    where?: TenderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenders to fetch.
     */
    orderBy?: TenderOrderByWithRelationInput | TenderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenders.
     */
    cursor?: TenderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenders.
     */
    distinct?: TenderScalarFieldEnum | TenderScalarFieldEnum[]
  }

  /**
   * Tender findMany
   */
  export type TenderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tender
     */
    select?: TenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tender
     */
    omit?: TenderOmit<ExtArgs> | null
    /**
     * Filter, which Tenders to fetch.
     */
    where?: TenderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenders to fetch.
     */
    orderBy?: TenderOrderByWithRelationInput | TenderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tenders.
     */
    cursor?: TenderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenders.
     */
    skip?: number
    distinct?: TenderScalarFieldEnum | TenderScalarFieldEnum[]
  }

  /**
   * Tender create
   */
  export type TenderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tender
     */
    select?: TenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tender
     */
    omit?: TenderOmit<ExtArgs> | null
    /**
     * The data needed to create a Tender.
     */
    data: XOR<TenderCreateInput, TenderUncheckedCreateInput>
  }

  /**
   * Tender createMany
   */
  export type TenderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tenders.
     */
    data: TenderCreateManyInput | TenderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tender createManyAndReturn
   */
  export type TenderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tender
     */
    select?: TenderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tender
     */
    omit?: TenderOmit<ExtArgs> | null
    /**
     * The data used to create many Tenders.
     */
    data: TenderCreateManyInput | TenderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tender update
   */
  export type TenderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tender
     */
    select?: TenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tender
     */
    omit?: TenderOmit<ExtArgs> | null
    /**
     * The data needed to update a Tender.
     */
    data: XOR<TenderUpdateInput, TenderUncheckedUpdateInput>
    /**
     * Choose, which Tender to update.
     */
    where: TenderWhereUniqueInput
  }

  /**
   * Tender updateMany
   */
  export type TenderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tenders.
     */
    data: XOR<TenderUpdateManyMutationInput, TenderUncheckedUpdateManyInput>
    /**
     * Filter which Tenders to update
     */
    where?: TenderWhereInput
    /**
     * Limit how many Tenders to update.
     */
    limit?: number
  }

  /**
   * Tender updateManyAndReturn
   */
  export type TenderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tender
     */
    select?: TenderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tender
     */
    omit?: TenderOmit<ExtArgs> | null
    /**
     * The data used to update Tenders.
     */
    data: XOR<TenderUpdateManyMutationInput, TenderUncheckedUpdateManyInput>
    /**
     * Filter which Tenders to update
     */
    where?: TenderWhereInput
    /**
     * Limit how many Tenders to update.
     */
    limit?: number
  }

  /**
   * Tender upsert
   */
  export type TenderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tender
     */
    select?: TenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tender
     */
    omit?: TenderOmit<ExtArgs> | null
    /**
     * The filter to search for the Tender to update in case it exists.
     */
    where: TenderWhereUniqueInput
    /**
     * In case the Tender found by the `where` argument doesn't exist, create a new Tender with this data.
     */
    create: XOR<TenderCreateInput, TenderUncheckedCreateInput>
    /**
     * In case the Tender was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TenderUpdateInput, TenderUncheckedUpdateInput>
  }

  /**
   * Tender delete
   */
  export type TenderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tender
     */
    select?: TenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tender
     */
    omit?: TenderOmit<ExtArgs> | null
    /**
     * Filter which Tender to delete.
     */
    where: TenderWhereUniqueInput
  }

  /**
   * Tender deleteMany
   */
  export type TenderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tenders to delete
     */
    where?: TenderWhereInput
    /**
     * Limit how many Tenders to delete.
     */
    limit?: number
  }

  /**
   * Tender without action
   */
  export type TenderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tender
     */
    select?: TenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tender
     */
    omit?: TenderOmit<ExtArgs> | null
  }


  /**
   * Model StaffForm
   */

  export type AggregateStaffForm = {
    _count: StaffFormCountAggregateOutputType | null
    _min: StaffFormMinAggregateOutputType | null
    _max: StaffFormMaxAggregateOutputType | null
  }

  export type StaffFormMinAggregateOutputType = {
    id: string | null
    title: string | null
    formType: string | null
    updatedDate: Date | null
    pdfUrl: string | null
    pdfKey: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type StaffFormMaxAggregateOutputType = {
    id: string | null
    title: string | null
    formType: string | null
    updatedDate: Date | null
    pdfUrl: string | null
    pdfKey: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type StaffFormCountAggregateOutputType = {
    id: number
    title: number
    formType: number
    updatedDate: number
    pdfUrl: number
    pdfKey: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type StaffFormMinAggregateInputType = {
    id?: true
    title?: true
    formType?: true
    updatedDate?: true
    pdfUrl?: true
    pdfKey?: true
    isActive?: true
    createdAt?: true
  }

  export type StaffFormMaxAggregateInputType = {
    id?: true
    title?: true
    formType?: true
    updatedDate?: true
    pdfUrl?: true
    pdfKey?: true
    isActive?: true
    createdAt?: true
  }

  export type StaffFormCountAggregateInputType = {
    id?: true
    title?: true
    formType?: true
    updatedDate?: true
    pdfUrl?: true
    pdfKey?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type StaffFormAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StaffForm to aggregate.
     */
    where?: StaffFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffForms to fetch.
     */
    orderBy?: StaffFormOrderByWithRelationInput | StaffFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StaffFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StaffForms
    **/
    _count?: true | StaffFormCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StaffFormMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StaffFormMaxAggregateInputType
  }

  export type GetStaffFormAggregateType<T extends StaffFormAggregateArgs> = {
        [P in keyof T & keyof AggregateStaffForm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStaffForm[P]>
      : GetScalarType<T[P], AggregateStaffForm[P]>
  }




  export type StaffFormGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffFormWhereInput
    orderBy?: StaffFormOrderByWithAggregationInput | StaffFormOrderByWithAggregationInput[]
    by: StaffFormScalarFieldEnum[] | StaffFormScalarFieldEnum
    having?: StaffFormScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StaffFormCountAggregateInputType | true
    _min?: StaffFormMinAggregateInputType
    _max?: StaffFormMaxAggregateInputType
  }

  export type StaffFormGroupByOutputType = {
    id: string
    title: string
    formType: string
    updatedDate: Date
    pdfUrl: string
    pdfKey: string | null
    isActive: boolean
    createdAt: Date
    _count: StaffFormCountAggregateOutputType | null
    _min: StaffFormMinAggregateOutputType | null
    _max: StaffFormMaxAggregateOutputType | null
  }

  type GetStaffFormGroupByPayload<T extends StaffFormGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StaffFormGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StaffFormGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StaffFormGroupByOutputType[P]>
            : GetScalarType<T[P], StaffFormGroupByOutputType[P]>
        }
      >
    >


  export type StaffFormSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    formType?: boolean
    updatedDate?: boolean
    pdfUrl?: boolean
    pdfKey?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["staffForm"]>

  export type StaffFormSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    formType?: boolean
    updatedDate?: boolean
    pdfUrl?: boolean
    pdfKey?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["staffForm"]>

  export type StaffFormSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    formType?: boolean
    updatedDate?: boolean
    pdfUrl?: boolean
    pdfKey?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["staffForm"]>

  export type StaffFormSelectScalar = {
    id?: boolean
    title?: boolean
    formType?: boolean
    updatedDate?: boolean
    pdfUrl?: boolean
    pdfKey?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type StaffFormOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "formType" | "updatedDate" | "pdfUrl" | "pdfKey" | "isActive" | "createdAt", ExtArgs["result"]["staffForm"]>

  export type $StaffFormPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StaffForm"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      formType: string
      updatedDate: Date
      pdfUrl: string
      pdfKey: string | null
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["staffForm"]>
    composites: {}
  }

  type StaffFormGetPayload<S extends boolean | null | undefined | StaffFormDefaultArgs> = $Result.GetResult<Prisma.$StaffFormPayload, S>

  type StaffFormCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StaffFormFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StaffFormCountAggregateInputType | true
    }

  export interface StaffFormDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StaffForm'], meta: { name: 'StaffForm' } }
    /**
     * Find zero or one StaffForm that matches the filter.
     * @param {StaffFormFindUniqueArgs} args - Arguments to find a StaffForm
     * @example
     * // Get one StaffForm
     * const staffForm = await prisma.staffForm.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StaffFormFindUniqueArgs>(args: SelectSubset<T, StaffFormFindUniqueArgs<ExtArgs>>): Prisma__StaffFormClient<$Result.GetResult<Prisma.$StaffFormPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StaffForm that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StaffFormFindUniqueOrThrowArgs} args - Arguments to find a StaffForm
     * @example
     * // Get one StaffForm
     * const staffForm = await prisma.staffForm.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StaffFormFindUniqueOrThrowArgs>(args: SelectSubset<T, StaffFormFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StaffFormClient<$Result.GetResult<Prisma.$StaffFormPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StaffForm that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffFormFindFirstArgs} args - Arguments to find a StaffForm
     * @example
     * // Get one StaffForm
     * const staffForm = await prisma.staffForm.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StaffFormFindFirstArgs>(args?: SelectSubset<T, StaffFormFindFirstArgs<ExtArgs>>): Prisma__StaffFormClient<$Result.GetResult<Prisma.$StaffFormPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StaffForm that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffFormFindFirstOrThrowArgs} args - Arguments to find a StaffForm
     * @example
     * // Get one StaffForm
     * const staffForm = await prisma.staffForm.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StaffFormFindFirstOrThrowArgs>(args?: SelectSubset<T, StaffFormFindFirstOrThrowArgs<ExtArgs>>): Prisma__StaffFormClient<$Result.GetResult<Prisma.$StaffFormPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StaffForms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffFormFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StaffForms
     * const staffForms = await prisma.staffForm.findMany()
     * 
     * // Get first 10 StaffForms
     * const staffForms = await prisma.staffForm.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const staffFormWithIdOnly = await prisma.staffForm.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StaffFormFindManyArgs>(args?: SelectSubset<T, StaffFormFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffFormPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StaffForm.
     * @param {StaffFormCreateArgs} args - Arguments to create a StaffForm.
     * @example
     * // Create one StaffForm
     * const StaffForm = await prisma.staffForm.create({
     *   data: {
     *     // ... data to create a StaffForm
     *   }
     * })
     * 
     */
    create<T extends StaffFormCreateArgs>(args: SelectSubset<T, StaffFormCreateArgs<ExtArgs>>): Prisma__StaffFormClient<$Result.GetResult<Prisma.$StaffFormPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StaffForms.
     * @param {StaffFormCreateManyArgs} args - Arguments to create many StaffForms.
     * @example
     * // Create many StaffForms
     * const staffForm = await prisma.staffForm.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StaffFormCreateManyArgs>(args?: SelectSubset<T, StaffFormCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StaffForms and returns the data saved in the database.
     * @param {StaffFormCreateManyAndReturnArgs} args - Arguments to create many StaffForms.
     * @example
     * // Create many StaffForms
     * const staffForm = await prisma.staffForm.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StaffForms and only return the `id`
     * const staffFormWithIdOnly = await prisma.staffForm.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StaffFormCreateManyAndReturnArgs>(args?: SelectSubset<T, StaffFormCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffFormPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StaffForm.
     * @param {StaffFormDeleteArgs} args - Arguments to delete one StaffForm.
     * @example
     * // Delete one StaffForm
     * const StaffForm = await prisma.staffForm.delete({
     *   where: {
     *     // ... filter to delete one StaffForm
     *   }
     * })
     * 
     */
    delete<T extends StaffFormDeleteArgs>(args: SelectSubset<T, StaffFormDeleteArgs<ExtArgs>>): Prisma__StaffFormClient<$Result.GetResult<Prisma.$StaffFormPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StaffForm.
     * @param {StaffFormUpdateArgs} args - Arguments to update one StaffForm.
     * @example
     * // Update one StaffForm
     * const staffForm = await prisma.staffForm.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StaffFormUpdateArgs>(args: SelectSubset<T, StaffFormUpdateArgs<ExtArgs>>): Prisma__StaffFormClient<$Result.GetResult<Prisma.$StaffFormPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StaffForms.
     * @param {StaffFormDeleteManyArgs} args - Arguments to filter StaffForms to delete.
     * @example
     * // Delete a few StaffForms
     * const { count } = await prisma.staffForm.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StaffFormDeleteManyArgs>(args?: SelectSubset<T, StaffFormDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StaffForms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffFormUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StaffForms
     * const staffForm = await prisma.staffForm.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StaffFormUpdateManyArgs>(args: SelectSubset<T, StaffFormUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StaffForms and returns the data updated in the database.
     * @param {StaffFormUpdateManyAndReturnArgs} args - Arguments to update many StaffForms.
     * @example
     * // Update many StaffForms
     * const staffForm = await prisma.staffForm.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StaffForms and only return the `id`
     * const staffFormWithIdOnly = await prisma.staffForm.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StaffFormUpdateManyAndReturnArgs>(args: SelectSubset<T, StaffFormUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffFormPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StaffForm.
     * @param {StaffFormUpsertArgs} args - Arguments to update or create a StaffForm.
     * @example
     * // Update or create a StaffForm
     * const staffForm = await prisma.staffForm.upsert({
     *   create: {
     *     // ... data to create a StaffForm
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StaffForm we want to update
     *   }
     * })
     */
    upsert<T extends StaffFormUpsertArgs>(args: SelectSubset<T, StaffFormUpsertArgs<ExtArgs>>): Prisma__StaffFormClient<$Result.GetResult<Prisma.$StaffFormPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StaffForms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffFormCountArgs} args - Arguments to filter StaffForms to count.
     * @example
     * // Count the number of StaffForms
     * const count = await prisma.staffForm.count({
     *   where: {
     *     // ... the filter for the StaffForms we want to count
     *   }
     * })
    **/
    count<T extends StaffFormCountArgs>(
      args?: Subset<T, StaffFormCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StaffFormCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StaffForm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffFormAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StaffFormAggregateArgs>(args: Subset<T, StaffFormAggregateArgs>): Prisma.PrismaPromise<GetStaffFormAggregateType<T>>

    /**
     * Group by StaffForm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffFormGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StaffFormGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StaffFormGroupByArgs['orderBy'] }
        : { orderBy?: StaffFormGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StaffFormGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStaffFormGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StaffForm model
   */
  readonly fields: StaffFormFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StaffForm.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StaffFormClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StaffForm model
   */
  interface StaffFormFieldRefs {
    readonly id: FieldRef<"StaffForm", 'String'>
    readonly title: FieldRef<"StaffForm", 'String'>
    readonly formType: FieldRef<"StaffForm", 'String'>
    readonly updatedDate: FieldRef<"StaffForm", 'DateTime'>
    readonly pdfUrl: FieldRef<"StaffForm", 'String'>
    readonly pdfKey: FieldRef<"StaffForm", 'String'>
    readonly isActive: FieldRef<"StaffForm", 'Boolean'>
    readonly createdAt: FieldRef<"StaffForm", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StaffForm findUnique
   */
  export type StaffFormFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffForm
     */
    select?: StaffFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffForm
     */
    omit?: StaffFormOmit<ExtArgs> | null
    /**
     * Filter, which StaffForm to fetch.
     */
    where: StaffFormWhereUniqueInput
  }

  /**
   * StaffForm findUniqueOrThrow
   */
  export type StaffFormFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffForm
     */
    select?: StaffFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffForm
     */
    omit?: StaffFormOmit<ExtArgs> | null
    /**
     * Filter, which StaffForm to fetch.
     */
    where: StaffFormWhereUniqueInput
  }

  /**
   * StaffForm findFirst
   */
  export type StaffFormFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffForm
     */
    select?: StaffFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffForm
     */
    omit?: StaffFormOmit<ExtArgs> | null
    /**
     * Filter, which StaffForm to fetch.
     */
    where?: StaffFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffForms to fetch.
     */
    orderBy?: StaffFormOrderByWithRelationInput | StaffFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StaffForms.
     */
    cursor?: StaffFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StaffForms.
     */
    distinct?: StaffFormScalarFieldEnum | StaffFormScalarFieldEnum[]
  }

  /**
   * StaffForm findFirstOrThrow
   */
  export type StaffFormFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffForm
     */
    select?: StaffFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffForm
     */
    omit?: StaffFormOmit<ExtArgs> | null
    /**
     * Filter, which StaffForm to fetch.
     */
    where?: StaffFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffForms to fetch.
     */
    orderBy?: StaffFormOrderByWithRelationInput | StaffFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StaffForms.
     */
    cursor?: StaffFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StaffForms.
     */
    distinct?: StaffFormScalarFieldEnum | StaffFormScalarFieldEnum[]
  }

  /**
   * StaffForm findMany
   */
  export type StaffFormFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffForm
     */
    select?: StaffFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffForm
     */
    omit?: StaffFormOmit<ExtArgs> | null
    /**
     * Filter, which StaffForms to fetch.
     */
    where?: StaffFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffForms to fetch.
     */
    orderBy?: StaffFormOrderByWithRelationInput | StaffFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StaffForms.
     */
    cursor?: StaffFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffForms.
     */
    skip?: number
    distinct?: StaffFormScalarFieldEnum | StaffFormScalarFieldEnum[]
  }

  /**
   * StaffForm create
   */
  export type StaffFormCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffForm
     */
    select?: StaffFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffForm
     */
    omit?: StaffFormOmit<ExtArgs> | null
    /**
     * The data needed to create a StaffForm.
     */
    data: XOR<StaffFormCreateInput, StaffFormUncheckedCreateInput>
  }

  /**
   * StaffForm createMany
   */
  export type StaffFormCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StaffForms.
     */
    data: StaffFormCreateManyInput | StaffFormCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StaffForm createManyAndReturn
   */
  export type StaffFormCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffForm
     */
    select?: StaffFormSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StaffForm
     */
    omit?: StaffFormOmit<ExtArgs> | null
    /**
     * The data used to create many StaffForms.
     */
    data: StaffFormCreateManyInput | StaffFormCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StaffForm update
   */
  export type StaffFormUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffForm
     */
    select?: StaffFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffForm
     */
    omit?: StaffFormOmit<ExtArgs> | null
    /**
     * The data needed to update a StaffForm.
     */
    data: XOR<StaffFormUpdateInput, StaffFormUncheckedUpdateInput>
    /**
     * Choose, which StaffForm to update.
     */
    where: StaffFormWhereUniqueInput
  }

  /**
   * StaffForm updateMany
   */
  export type StaffFormUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StaffForms.
     */
    data: XOR<StaffFormUpdateManyMutationInput, StaffFormUncheckedUpdateManyInput>
    /**
     * Filter which StaffForms to update
     */
    where?: StaffFormWhereInput
    /**
     * Limit how many StaffForms to update.
     */
    limit?: number
  }

  /**
   * StaffForm updateManyAndReturn
   */
  export type StaffFormUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffForm
     */
    select?: StaffFormSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StaffForm
     */
    omit?: StaffFormOmit<ExtArgs> | null
    /**
     * The data used to update StaffForms.
     */
    data: XOR<StaffFormUpdateManyMutationInput, StaffFormUncheckedUpdateManyInput>
    /**
     * Filter which StaffForms to update
     */
    where?: StaffFormWhereInput
    /**
     * Limit how many StaffForms to update.
     */
    limit?: number
  }

  /**
   * StaffForm upsert
   */
  export type StaffFormUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffForm
     */
    select?: StaffFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffForm
     */
    omit?: StaffFormOmit<ExtArgs> | null
    /**
     * The filter to search for the StaffForm to update in case it exists.
     */
    where: StaffFormWhereUniqueInput
    /**
     * In case the StaffForm found by the `where` argument doesn't exist, create a new StaffForm with this data.
     */
    create: XOR<StaffFormCreateInput, StaffFormUncheckedCreateInput>
    /**
     * In case the StaffForm was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StaffFormUpdateInput, StaffFormUncheckedUpdateInput>
  }

  /**
   * StaffForm delete
   */
  export type StaffFormDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffForm
     */
    select?: StaffFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffForm
     */
    omit?: StaffFormOmit<ExtArgs> | null
    /**
     * Filter which StaffForm to delete.
     */
    where: StaffFormWhereUniqueInput
  }

  /**
   * StaffForm deleteMany
   */
  export type StaffFormDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StaffForms to delete
     */
    where?: StaffFormWhereInput
    /**
     * Limit how many StaffForms to delete.
     */
    limit?: number
  }

  /**
   * StaffForm without action
   */
  export type StaffFormDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffForm
     */
    select?: StaffFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffForm
     */
    omit?: StaffFormOmit<ExtArgs> | null
  }


  /**
   * Model GalleryImage
   */

  export type AggregateGalleryImage = {
    _count: GalleryImageCountAggregateOutputType | null
    _min: GalleryImageMinAggregateOutputType | null
    _max: GalleryImageMaxAggregateOutputType | null
  }

  export type GalleryImageMinAggregateOutputType = {
    id: string | null
    imageUrl: string | null
    category: $Enums.GalleryCategory | null
    imageKey: string | null
    createdAt: Date | null
  }

  export type GalleryImageMaxAggregateOutputType = {
    id: string | null
    imageUrl: string | null
    category: $Enums.GalleryCategory | null
    imageKey: string | null
    createdAt: Date | null
  }

  export type GalleryImageCountAggregateOutputType = {
    id: number
    imageUrl: number
    category: number
    imageKey: number
    createdAt: number
    _all: number
  }


  export type GalleryImageMinAggregateInputType = {
    id?: true
    imageUrl?: true
    category?: true
    imageKey?: true
    createdAt?: true
  }

  export type GalleryImageMaxAggregateInputType = {
    id?: true
    imageUrl?: true
    category?: true
    imageKey?: true
    createdAt?: true
  }

  export type GalleryImageCountAggregateInputType = {
    id?: true
    imageUrl?: true
    category?: true
    imageKey?: true
    createdAt?: true
    _all?: true
  }

  export type GalleryImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GalleryImage to aggregate.
     */
    where?: GalleryImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryImages to fetch.
     */
    orderBy?: GalleryImageOrderByWithRelationInput | GalleryImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GalleryImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GalleryImages
    **/
    _count?: true | GalleryImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GalleryImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GalleryImageMaxAggregateInputType
  }

  export type GetGalleryImageAggregateType<T extends GalleryImageAggregateArgs> = {
        [P in keyof T & keyof AggregateGalleryImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGalleryImage[P]>
      : GetScalarType<T[P], AggregateGalleryImage[P]>
  }




  export type GalleryImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GalleryImageWhereInput
    orderBy?: GalleryImageOrderByWithAggregationInput | GalleryImageOrderByWithAggregationInput[]
    by: GalleryImageScalarFieldEnum[] | GalleryImageScalarFieldEnum
    having?: GalleryImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GalleryImageCountAggregateInputType | true
    _min?: GalleryImageMinAggregateInputType
    _max?: GalleryImageMaxAggregateInputType
  }

  export type GalleryImageGroupByOutputType = {
    id: string
    imageUrl: string
    category: $Enums.GalleryCategory
    imageKey: string
    createdAt: Date
    _count: GalleryImageCountAggregateOutputType | null
    _min: GalleryImageMinAggregateOutputType | null
    _max: GalleryImageMaxAggregateOutputType | null
  }

  type GetGalleryImageGroupByPayload<T extends GalleryImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GalleryImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GalleryImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GalleryImageGroupByOutputType[P]>
            : GetScalarType<T[P], GalleryImageGroupByOutputType[P]>
        }
      >
    >


  export type GalleryImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    category?: boolean
    imageKey?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["galleryImage"]>

  export type GalleryImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    category?: boolean
    imageKey?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["galleryImage"]>

  export type GalleryImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    category?: boolean
    imageKey?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["galleryImage"]>

  export type GalleryImageSelectScalar = {
    id?: boolean
    imageUrl?: boolean
    category?: boolean
    imageKey?: boolean
    createdAt?: boolean
  }

  export type GalleryImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "imageUrl" | "category" | "imageKey" | "createdAt", ExtArgs["result"]["galleryImage"]>

  export type $GalleryImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GalleryImage"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      imageUrl: string
      category: $Enums.GalleryCategory
      imageKey: string
      createdAt: Date
    }, ExtArgs["result"]["galleryImage"]>
    composites: {}
  }

  type GalleryImageGetPayload<S extends boolean | null | undefined | GalleryImageDefaultArgs> = $Result.GetResult<Prisma.$GalleryImagePayload, S>

  type GalleryImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GalleryImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GalleryImageCountAggregateInputType | true
    }

  export interface GalleryImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GalleryImage'], meta: { name: 'GalleryImage' } }
    /**
     * Find zero or one GalleryImage that matches the filter.
     * @param {GalleryImageFindUniqueArgs} args - Arguments to find a GalleryImage
     * @example
     * // Get one GalleryImage
     * const galleryImage = await prisma.galleryImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GalleryImageFindUniqueArgs>(args: SelectSubset<T, GalleryImageFindUniqueArgs<ExtArgs>>): Prisma__GalleryImageClient<$Result.GetResult<Prisma.$GalleryImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GalleryImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GalleryImageFindUniqueOrThrowArgs} args - Arguments to find a GalleryImage
     * @example
     * // Get one GalleryImage
     * const galleryImage = await prisma.galleryImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GalleryImageFindUniqueOrThrowArgs>(args: SelectSubset<T, GalleryImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GalleryImageClient<$Result.GetResult<Prisma.$GalleryImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GalleryImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryImageFindFirstArgs} args - Arguments to find a GalleryImage
     * @example
     * // Get one GalleryImage
     * const galleryImage = await prisma.galleryImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GalleryImageFindFirstArgs>(args?: SelectSubset<T, GalleryImageFindFirstArgs<ExtArgs>>): Prisma__GalleryImageClient<$Result.GetResult<Prisma.$GalleryImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GalleryImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryImageFindFirstOrThrowArgs} args - Arguments to find a GalleryImage
     * @example
     * // Get one GalleryImage
     * const galleryImage = await prisma.galleryImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GalleryImageFindFirstOrThrowArgs>(args?: SelectSubset<T, GalleryImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__GalleryImageClient<$Result.GetResult<Prisma.$GalleryImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GalleryImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GalleryImages
     * const galleryImages = await prisma.galleryImage.findMany()
     * 
     * // Get first 10 GalleryImages
     * const galleryImages = await prisma.galleryImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const galleryImageWithIdOnly = await prisma.galleryImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GalleryImageFindManyArgs>(args?: SelectSubset<T, GalleryImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GalleryImage.
     * @param {GalleryImageCreateArgs} args - Arguments to create a GalleryImage.
     * @example
     * // Create one GalleryImage
     * const GalleryImage = await prisma.galleryImage.create({
     *   data: {
     *     // ... data to create a GalleryImage
     *   }
     * })
     * 
     */
    create<T extends GalleryImageCreateArgs>(args: SelectSubset<T, GalleryImageCreateArgs<ExtArgs>>): Prisma__GalleryImageClient<$Result.GetResult<Prisma.$GalleryImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GalleryImages.
     * @param {GalleryImageCreateManyArgs} args - Arguments to create many GalleryImages.
     * @example
     * // Create many GalleryImages
     * const galleryImage = await prisma.galleryImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GalleryImageCreateManyArgs>(args?: SelectSubset<T, GalleryImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GalleryImages and returns the data saved in the database.
     * @param {GalleryImageCreateManyAndReturnArgs} args - Arguments to create many GalleryImages.
     * @example
     * // Create many GalleryImages
     * const galleryImage = await prisma.galleryImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GalleryImages and only return the `id`
     * const galleryImageWithIdOnly = await prisma.galleryImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GalleryImageCreateManyAndReturnArgs>(args?: SelectSubset<T, GalleryImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GalleryImage.
     * @param {GalleryImageDeleteArgs} args - Arguments to delete one GalleryImage.
     * @example
     * // Delete one GalleryImage
     * const GalleryImage = await prisma.galleryImage.delete({
     *   where: {
     *     // ... filter to delete one GalleryImage
     *   }
     * })
     * 
     */
    delete<T extends GalleryImageDeleteArgs>(args: SelectSubset<T, GalleryImageDeleteArgs<ExtArgs>>): Prisma__GalleryImageClient<$Result.GetResult<Prisma.$GalleryImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GalleryImage.
     * @param {GalleryImageUpdateArgs} args - Arguments to update one GalleryImage.
     * @example
     * // Update one GalleryImage
     * const galleryImage = await prisma.galleryImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GalleryImageUpdateArgs>(args: SelectSubset<T, GalleryImageUpdateArgs<ExtArgs>>): Prisma__GalleryImageClient<$Result.GetResult<Prisma.$GalleryImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GalleryImages.
     * @param {GalleryImageDeleteManyArgs} args - Arguments to filter GalleryImages to delete.
     * @example
     * // Delete a few GalleryImages
     * const { count } = await prisma.galleryImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GalleryImageDeleteManyArgs>(args?: SelectSubset<T, GalleryImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GalleryImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GalleryImages
     * const galleryImage = await prisma.galleryImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GalleryImageUpdateManyArgs>(args: SelectSubset<T, GalleryImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GalleryImages and returns the data updated in the database.
     * @param {GalleryImageUpdateManyAndReturnArgs} args - Arguments to update many GalleryImages.
     * @example
     * // Update many GalleryImages
     * const galleryImage = await prisma.galleryImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GalleryImages and only return the `id`
     * const galleryImageWithIdOnly = await prisma.galleryImage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GalleryImageUpdateManyAndReturnArgs>(args: SelectSubset<T, GalleryImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GalleryImage.
     * @param {GalleryImageUpsertArgs} args - Arguments to update or create a GalleryImage.
     * @example
     * // Update or create a GalleryImage
     * const galleryImage = await prisma.galleryImage.upsert({
     *   create: {
     *     // ... data to create a GalleryImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GalleryImage we want to update
     *   }
     * })
     */
    upsert<T extends GalleryImageUpsertArgs>(args: SelectSubset<T, GalleryImageUpsertArgs<ExtArgs>>): Prisma__GalleryImageClient<$Result.GetResult<Prisma.$GalleryImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GalleryImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryImageCountArgs} args - Arguments to filter GalleryImages to count.
     * @example
     * // Count the number of GalleryImages
     * const count = await prisma.galleryImage.count({
     *   where: {
     *     // ... the filter for the GalleryImages we want to count
     *   }
     * })
    **/
    count<T extends GalleryImageCountArgs>(
      args?: Subset<T, GalleryImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GalleryImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GalleryImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GalleryImageAggregateArgs>(args: Subset<T, GalleryImageAggregateArgs>): Prisma.PrismaPromise<GetGalleryImageAggregateType<T>>

    /**
     * Group by GalleryImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GalleryImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GalleryImageGroupByArgs['orderBy'] }
        : { orderBy?: GalleryImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GalleryImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGalleryImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GalleryImage model
   */
  readonly fields: GalleryImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GalleryImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GalleryImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GalleryImage model
   */
  interface GalleryImageFieldRefs {
    readonly id: FieldRef<"GalleryImage", 'String'>
    readonly imageUrl: FieldRef<"GalleryImage", 'String'>
    readonly category: FieldRef<"GalleryImage", 'GalleryCategory'>
    readonly imageKey: FieldRef<"GalleryImage", 'String'>
    readonly createdAt: FieldRef<"GalleryImage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GalleryImage findUnique
   */
  export type GalleryImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryImage
     */
    omit?: GalleryImageOmit<ExtArgs> | null
    /**
     * Filter, which GalleryImage to fetch.
     */
    where: GalleryImageWhereUniqueInput
  }

  /**
   * GalleryImage findUniqueOrThrow
   */
  export type GalleryImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryImage
     */
    omit?: GalleryImageOmit<ExtArgs> | null
    /**
     * Filter, which GalleryImage to fetch.
     */
    where: GalleryImageWhereUniqueInput
  }

  /**
   * GalleryImage findFirst
   */
  export type GalleryImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryImage
     */
    omit?: GalleryImageOmit<ExtArgs> | null
    /**
     * Filter, which GalleryImage to fetch.
     */
    where?: GalleryImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryImages to fetch.
     */
    orderBy?: GalleryImageOrderByWithRelationInput | GalleryImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GalleryImages.
     */
    cursor?: GalleryImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GalleryImages.
     */
    distinct?: GalleryImageScalarFieldEnum | GalleryImageScalarFieldEnum[]
  }

  /**
   * GalleryImage findFirstOrThrow
   */
  export type GalleryImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryImage
     */
    omit?: GalleryImageOmit<ExtArgs> | null
    /**
     * Filter, which GalleryImage to fetch.
     */
    where?: GalleryImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryImages to fetch.
     */
    orderBy?: GalleryImageOrderByWithRelationInput | GalleryImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GalleryImages.
     */
    cursor?: GalleryImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GalleryImages.
     */
    distinct?: GalleryImageScalarFieldEnum | GalleryImageScalarFieldEnum[]
  }

  /**
   * GalleryImage findMany
   */
  export type GalleryImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryImage
     */
    omit?: GalleryImageOmit<ExtArgs> | null
    /**
     * Filter, which GalleryImages to fetch.
     */
    where?: GalleryImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryImages to fetch.
     */
    orderBy?: GalleryImageOrderByWithRelationInput | GalleryImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GalleryImages.
     */
    cursor?: GalleryImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryImages.
     */
    skip?: number
    distinct?: GalleryImageScalarFieldEnum | GalleryImageScalarFieldEnum[]
  }

  /**
   * GalleryImage create
   */
  export type GalleryImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryImage
     */
    omit?: GalleryImageOmit<ExtArgs> | null
    /**
     * The data needed to create a GalleryImage.
     */
    data: XOR<GalleryImageCreateInput, GalleryImageUncheckedCreateInput>
  }

  /**
   * GalleryImage createMany
   */
  export type GalleryImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GalleryImages.
     */
    data: GalleryImageCreateManyInput | GalleryImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GalleryImage createManyAndReturn
   */
  export type GalleryImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryImage
     */
    omit?: GalleryImageOmit<ExtArgs> | null
    /**
     * The data used to create many GalleryImages.
     */
    data: GalleryImageCreateManyInput | GalleryImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GalleryImage update
   */
  export type GalleryImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryImage
     */
    omit?: GalleryImageOmit<ExtArgs> | null
    /**
     * The data needed to update a GalleryImage.
     */
    data: XOR<GalleryImageUpdateInput, GalleryImageUncheckedUpdateInput>
    /**
     * Choose, which GalleryImage to update.
     */
    where: GalleryImageWhereUniqueInput
  }

  /**
   * GalleryImage updateMany
   */
  export type GalleryImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GalleryImages.
     */
    data: XOR<GalleryImageUpdateManyMutationInput, GalleryImageUncheckedUpdateManyInput>
    /**
     * Filter which GalleryImages to update
     */
    where?: GalleryImageWhereInput
    /**
     * Limit how many GalleryImages to update.
     */
    limit?: number
  }

  /**
   * GalleryImage updateManyAndReturn
   */
  export type GalleryImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryImage
     */
    omit?: GalleryImageOmit<ExtArgs> | null
    /**
     * The data used to update GalleryImages.
     */
    data: XOR<GalleryImageUpdateManyMutationInput, GalleryImageUncheckedUpdateManyInput>
    /**
     * Filter which GalleryImages to update
     */
    where?: GalleryImageWhereInput
    /**
     * Limit how many GalleryImages to update.
     */
    limit?: number
  }

  /**
   * GalleryImage upsert
   */
  export type GalleryImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryImage
     */
    omit?: GalleryImageOmit<ExtArgs> | null
    /**
     * The filter to search for the GalleryImage to update in case it exists.
     */
    where: GalleryImageWhereUniqueInput
    /**
     * In case the GalleryImage found by the `where` argument doesn't exist, create a new GalleryImage with this data.
     */
    create: XOR<GalleryImageCreateInput, GalleryImageUncheckedCreateInput>
    /**
     * In case the GalleryImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GalleryImageUpdateInput, GalleryImageUncheckedUpdateInput>
  }

  /**
   * GalleryImage delete
   */
  export type GalleryImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryImage
     */
    omit?: GalleryImageOmit<ExtArgs> | null
    /**
     * Filter which GalleryImage to delete.
     */
    where: GalleryImageWhereUniqueInput
  }

  /**
   * GalleryImage deleteMany
   */
  export type GalleryImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GalleryImages to delete
     */
    where?: GalleryImageWhereInput
    /**
     * Limit how many GalleryImages to delete.
     */
    limit?: number
  }

  /**
   * GalleryImage without action
   */
  export type GalleryImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryImage
     */
    omit?: GalleryImageOmit<ExtArgs> | null
  }


  /**
   * Model GalleryVideo
   */

  export type AggregateGalleryVideo = {
    _count: GalleryVideoCountAggregateOutputType | null
    _min: GalleryVideoMinAggregateOutputType | null
    _max: GalleryVideoMaxAggregateOutputType | null
  }

  export type GalleryVideoMinAggregateOutputType = {
    id: string | null
    youtubeUrl: string | null
    youtubeKey: string | null
    category: string | null
    title: string | null
    createdAt: Date | null
  }

  export type GalleryVideoMaxAggregateOutputType = {
    id: string | null
    youtubeUrl: string | null
    youtubeKey: string | null
    category: string | null
    title: string | null
    createdAt: Date | null
  }

  export type GalleryVideoCountAggregateOutputType = {
    id: number
    youtubeUrl: number
    youtubeKey: number
    category: number
    title: number
    createdAt: number
    _all: number
  }


  export type GalleryVideoMinAggregateInputType = {
    id?: true
    youtubeUrl?: true
    youtubeKey?: true
    category?: true
    title?: true
    createdAt?: true
  }

  export type GalleryVideoMaxAggregateInputType = {
    id?: true
    youtubeUrl?: true
    youtubeKey?: true
    category?: true
    title?: true
    createdAt?: true
  }

  export type GalleryVideoCountAggregateInputType = {
    id?: true
    youtubeUrl?: true
    youtubeKey?: true
    category?: true
    title?: true
    createdAt?: true
    _all?: true
  }

  export type GalleryVideoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GalleryVideo to aggregate.
     */
    where?: GalleryVideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryVideos to fetch.
     */
    orderBy?: GalleryVideoOrderByWithRelationInput | GalleryVideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GalleryVideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryVideos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryVideos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GalleryVideos
    **/
    _count?: true | GalleryVideoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GalleryVideoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GalleryVideoMaxAggregateInputType
  }

  export type GetGalleryVideoAggregateType<T extends GalleryVideoAggregateArgs> = {
        [P in keyof T & keyof AggregateGalleryVideo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGalleryVideo[P]>
      : GetScalarType<T[P], AggregateGalleryVideo[P]>
  }




  export type GalleryVideoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GalleryVideoWhereInput
    orderBy?: GalleryVideoOrderByWithAggregationInput | GalleryVideoOrderByWithAggregationInput[]
    by: GalleryVideoScalarFieldEnum[] | GalleryVideoScalarFieldEnum
    having?: GalleryVideoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GalleryVideoCountAggregateInputType | true
    _min?: GalleryVideoMinAggregateInputType
    _max?: GalleryVideoMaxAggregateInputType
  }

  export type GalleryVideoGroupByOutputType = {
    id: string
    youtubeUrl: string
    youtubeKey: string
    category: string
    title: string | null
    createdAt: Date
    _count: GalleryVideoCountAggregateOutputType | null
    _min: GalleryVideoMinAggregateOutputType | null
    _max: GalleryVideoMaxAggregateOutputType | null
  }

  type GetGalleryVideoGroupByPayload<T extends GalleryVideoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GalleryVideoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GalleryVideoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GalleryVideoGroupByOutputType[P]>
            : GetScalarType<T[P], GalleryVideoGroupByOutputType[P]>
        }
      >
    >


  export type GalleryVideoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    youtubeUrl?: boolean
    youtubeKey?: boolean
    category?: boolean
    title?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["galleryVideo"]>

  export type GalleryVideoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    youtubeUrl?: boolean
    youtubeKey?: boolean
    category?: boolean
    title?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["galleryVideo"]>

  export type GalleryVideoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    youtubeUrl?: boolean
    youtubeKey?: boolean
    category?: boolean
    title?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["galleryVideo"]>

  export type GalleryVideoSelectScalar = {
    id?: boolean
    youtubeUrl?: boolean
    youtubeKey?: boolean
    category?: boolean
    title?: boolean
    createdAt?: boolean
  }

  export type GalleryVideoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "youtubeUrl" | "youtubeKey" | "category" | "title" | "createdAt", ExtArgs["result"]["galleryVideo"]>

  export type $GalleryVideoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GalleryVideo"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      youtubeUrl: string
      youtubeKey: string
      category: string
      title: string | null
      createdAt: Date
    }, ExtArgs["result"]["galleryVideo"]>
    composites: {}
  }

  type GalleryVideoGetPayload<S extends boolean | null | undefined | GalleryVideoDefaultArgs> = $Result.GetResult<Prisma.$GalleryVideoPayload, S>

  type GalleryVideoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GalleryVideoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GalleryVideoCountAggregateInputType | true
    }

  export interface GalleryVideoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GalleryVideo'], meta: { name: 'GalleryVideo' } }
    /**
     * Find zero or one GalleryVideo that matches the filter.
     * @param {GalleryVideoFindUniqueArgs} args - Arguments to find a GalleryVideo
     * @example
     * // Get one GalleryVideo
     * const galleryVideo = await prisma.galleryVideo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GalleryVideoFindUniqueArgs>(args: SelectSubset<T, GalleryVideoFindUniqueArgs<ExtArgs>>): Prisma__GalleryVideoClient<$Result.GetResult<Prisma.$GalleryVideoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GalleryVideo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GalleryVideoFindUniqueOrThrowArgs} args - Arguments to find a GalleryVideo
     * @example
     * // Get one GalleryVideo
     * const galleryVideo = await prisma.galleryVideo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GalleryVideoFindUniqueOrThrowArgs>(args: SelectSubset<T, GalleryVideoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GalleryVideoClient<$Result.GetResult<Prisma.$GalleryVideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GalleryVideo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryVideoFindFirstArgs} args - Arguments to find a GalleryVideo
     * @example
     * // Get one GalleryVideo
     * const galleryVideo = await prisma.galleryVideo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GalleryVideoFindFirstArgs>(args?: SelectSubset<T, GalleryVideoFindFirstArgs<ExtArgs>>): Prisma__GalleryVideoClient<$Result.GetResult<Prisma.$GalleryVideoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GalleryVideo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryVideoFindFirstOrThrowArgs} args - Arguments to find a GalleryVideo
     * @example
     * // Get one GalleryVideo
     * const galleryVideo = await prisma.galleryVideo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GalleryVideoFindFirstOrThrowArgs>(args?: SelectSubset<T, GalleryVideoFindFirstOrThrowArgs<ExtArgs>>): Prisma__GalleryVideoClient<$Result.GetResult<Prisma.$GalleryVideoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GalleryVideos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryVideoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GalleryVideos
     * const galleryVideos = await prisma.galleryVideo.findMany()
     * 
     * // Get first 10 GalleryVideos
     * const galleryVideos = await prisma.galleryVideo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const galleryVideoWithIdOnly = await prisma.galleryVideo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GalleryVideoFindManyArgs>(args?: SelectSubset<T, GalleryVideoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryVideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GalleryVideo.
     * @param {GalleryVideoCreateArgs} args - Arguments to create a GalleryVideo.
     * @example
     * // Create one GalleryVideo
     * const GalleryVideo = await prisma.galleryVideo.create({
     *   data: {
     *     // ... data to create a GalleryVideo
     *   }
     * })
     * 
     */
    create<T extends GalleryVideoCreateArgs>(args: SelectSubset<T, GalleryVideoCreateArgs<ExtArgs>>): Prisma__GalleryVideoClient<$Result.GetResult<Prisma.$GalleryVideoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GalleryVideos.
     * @param {GalleryVideoCreateManyArgs} args - Arguments to create many GalleryVideos.
     * @example
     * // Create many GalleryVideos
     * const galleryVideo = await prisma.galleryVideo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GalleryVideoCreateManyArgs>(args?: SelectSubset<T, GalleryVideoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GalleryVideos and returns the data saved in the database.
     * @param {GalleryVideoCreateManyAndReturnArgs} args - Arguments to create many GalleryVideos.
     * @example
     * // Create many GalleryVideos
     * const galleryVideo = await prisma.galleryVideo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GalleryVideos and only return the `id`
     * const galleryVideoWithIdOnly = await prisma.galleryVideo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GalleryVideoCreateManyAndReturnArgs>(args?: SelectSubset<T, GalleryVideoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryVideoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GalleryVideo.
     * @param {GalleryVideoDeleteArgs} args - Arguments to delete one GalleryVideo.
     * @example
     * // Delete one GalleryVideo
     * const GalleryVideo = await prisma.galleryVideo.delete({
     *   where: {
     *     // ... filter to delete one GalleryVideo
     *   }
     * })
     * 
     */
    delete<T extends GalleryVideoDeleteArgs>(args: SelectSubset<T, GalleryVideoDeleteArgs<ExtArgs>>): Prisma__GalleryVideoClient<$Result.GetResult<Prisma.$GalleryVideoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GalleryVideo.
     * @param {GalleryVideoUpdateArgs} args - Arguments to update one GalleryVideo.
     * @example
     * // Update one GalleryVideo
     * const galleryVideo = await prisma.galleryVideo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GalleryVideoUpdateArgs>(args: SelectSubset<T, GalleryVideoUpdateArgs<ExtArgs>>): Prisma__GalleryVideoClient<$Result.GetResult<Prisma.$GalleryVideoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GalleryVideos.
     * @param {GalleryVideoDeleteManyArgs} args - Arguments to filter GalleryVideos to delete.
     * @example
     * // Delete a few GalleryVideos
     * const { count } = await prisma.galleryVideo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GalleryVideoDeleteManyArgs>(args?: SelectSubset<T, GalleryVideoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GalleryVideos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryVideoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GalleryVideos
     * const galleryVideo = await prisma.galleryVideo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GalleryVideoUpdateManyArgs>(args: SelectSubset<T, GalleryVideoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GalleryVideos and returns the data updated in the database.
     * @param {GalleryVideoUpdateManyAndReturnArgs} args - Arguments to update many GalleryVideos.
     * @example
     * // Update many GalleryVideos
     * const galleryVideo = await prisma.galleryVideo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GalleryVideos and only return the `id`
     * const galleryVideoWithIdOnly = await prisma.galleryVideo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GalleryVideoUpdateManyAndReturnArgs>(args: SelectSubset<T, GalleryVideoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryVideoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GalleryVideo.
     * @param {GalleryVideoUpsertArgs} args - Arguments to update or create a GalleryVideo.
     * @example
     * // Update or create a GalleryVideo
     * const galleryVideo = await prisma.galleryVideo.upsert({
     *   create: {
     *     // ... data to create a GalleryVideo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GalleryVideo we want to update
     *   }
     * })
     */
    upsert<T extends GalleryVideoUpsertArgs>(args: SelectSubset<T, GalleryVideoUpsertArgs<ExtArgs>>): Prisma__GalleryVideoClient<$Result.GetResult<Prisma.$GalleryVideoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GalleryVideos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryVideoCountArgs} args - Arguments to filter GalleryVideos to count.
     * @example
     * // Count the number of GalleryVideos
     * const count = await prisma.galleryVideo.count({
     *   where: {
     *     // ... the filter for the GalleryVideos we want to count
     *   }
     * })
    **/
    count<T extends GalleryVideoCountArgs>(
      args?: Subset<T, GalleryVideoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GalleryVideoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GalleryVideo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryVideoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GalleryVideoAggregateArgs>(args: Subset<T, GalleryVideoAggregateArgs>): Prisma.PrismaPromise<GetGalleryVideoAggregateType<T>>

    /**
     * Group by GalleryVideo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryVideoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GalleryVideoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GalleryVideoGroupByArgs['orderBy'] }
        : { orderBy?: GalleryVideoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GalleryVideoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGalleryVideoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GalleryVideo model
   */
  readonly fields: GalleryVideoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GalleryVideo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GalleryVideoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GalleryVideo model
   */
  interface GalleryVideoFieldRefs {
    readonly id: FieldRef<"GalleryVideo", 'String'>
    readonly youtubeUrl: FieldRef<"GalleryVideo", 'String'>
    readonly youtubeKey: FieldRef<"GalleryVideo", 'String'>
    readonly category: FieldRef<"GalleryVideo", 'String'>
    readonly title: FieldRef<"GalleryVideo", 'String'>
    readonly createdAt: FieldRef<"GalleryVideo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GalleryVideo findUnique
   */
  export type GalleryVideoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryVideo
     */
    select?: GalleryVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryVideo
     */
    omit?: GalleryVideoOmit<ExtArgs> | null
    /**
     * Filter, which GalleryVideo to fetch.
     */
    where: GalleryVideoWhereUniqueInput
  }

  /**
   * GalleryVideo findUniqueOrThrow
   */
  export type GalleryVideoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryVideo
     */
    select?: GalleryVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryVideo
     */
    omit?: GalleryVideoOmit<ExtArgs> | null
    /**
     * Filter, which GalleryVideo to fetch.
     */
    where: GalleryVideoWhereUniqueInput
  }

  /**
   * GalleryVideo findFirst
   */
  export type GalleryVideoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryVideo
     */
    select?: GalleryVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryVideo
     */
    omit?: GalleryVideoOmit<ExtArgs> | null
    /**
     * Filter, which GalleryVideo to fetch.
     */
    where?: GalleryVideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryVideos to fetch.
     */
    orderBy?: GalleryVideoOrderByWithRelationInput | GalleryVideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GalleryVideos.
     */
    cursor?: GalleryVideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryVideos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryVideos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GalleryVideos.
     */
    distinct?: GalleryVideoScalarFieldEnum | GalleryVideoScalarFieldEnum[]
  }

  /**
   * GalleryVideo findFirstOrThrow
   */
  export type GalleryVideoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryVideo
     */
    select?: GalleryVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryVideo
     */
    omit?: GalleryVideoOmit<ExtArgs> | null
    /**
     * Filter, which GalleryVideo to fetch.
     */
    where?: GalleryVideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryVideos to fetch.
     */
    orderBy?: GalleryVideoOrderByWithRelationInput | GalleryVideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GalleryVideos.
     */
    cursor?: GalleryVideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryVideos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryVideos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GalleryVideos.
     */
    distinct?: GalleryVideoScalarFieldEnum | GalleryVideoScalarFieldEnum[]
  }

  /**
   * GalleryVideo findMany
   */
  export type GalleryVideoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryVideo
     */
    select?: GalleryVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryVideo
     */
    omit?: GalleryVideoOmit<ExtArgs> | null
    /**
     * Filter, which GalleryVideos to fetch.
     */
    where?: GalleryVideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryVideos to fetch.
     */
    orderBy?: GalleryVideoOrderByWithRelationInput | GalleryVideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GalleryVideos.
     */
    cursor?: GalleryVideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryVideos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryVideos.
     */
    skip?: number
    distinct?: GalleryVideoScalarFieldEnum | GalleryVideoScalarFieldEnum[]
  }

  /**
   * GalleryVideo create
   */
  export type GalleryVideoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryVideo
     */
    select?: GalleryVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryVideo
     */
    omit?: GalleryVideoOmit<ExtArgs> | null
    /**
     * The data needed to create a GalleryVideo.
     */
    data: XOR<GalleryVideoCreateInput, GalleryVideoUncheckedCreateInput>
  }

  /**
   * GalleryVideo createMany
   */
  export type GalleryVideoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GalleryVideos.
     */
    data: GalleryVideoCreateManyInput | GalleryVideoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GalleryVideo createManyAndReturn
   */
  export type GalleryVideoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryVideo
     */
    select?: GalleryVideoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryVideo
     */
    omit?: GalleryVideoOmit<ExtArgs> | null
    /**
     * The data used to create many GalleryVideos.
     */
    data: GalleryVideoCreateManyInput | GalleryVideoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GalleryVideo update
   */
  export type GalleryVideoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryVideo
     */
    select?: GalleryVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryVideo
     */
    omit?: GalleryVideoOmit<ExtArgs> | null
    /**
     * The data needed to update a GalleryVideo.
     */
    data: XOR<GalleryVideoUpdateInput, GalleryVideoUncheckedUpdateInput>
    /**
     * Choose, which GalleryVideo to update.
     */
    where: GalleryVideoWhereUniqueInput
  }

  /**
   * GalleryVideo updateMany
   */
  export type GalleryVideoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GalleryVideos.
     */
    data: XOR<GalleryVideoUpdateManyMutationInput, GalleryVideoUncheckedUpdateManyInput>
    /**
     * Filter which GalleryVideos to update
     */
    where?: GalleryVideoWhereInput
    /**
     * Limit how many GalleryVideos to update.
     */
    limit?: number
  }

  /**
   * GalleryVideo updateManyAndReturn
   */
  export type GalleryVideoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryVideo
     */
    select?: GalleryVideoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryVideo
     */
    omit?: GalleryVideoOmit<ExtArgs> | null
    /**
     * The data used to update GalleryVideos.
     */
    data: XOR<GalleryVideoUpdateManyMutationInput, GalleryVideoUncheckedUpdateManyInput>
    /**
     * Filter which GalleryVideos to update
     */
    where?: GalleryVideoWhereInput
    /**
     * Limit how many GalleryVideos to update.
     */
    limit?: number
  }

  /**
   * GalleryVideo upsert
   */
  export type GalleryVideoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryVideo
     */
    select?: GalleryVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryVideo
     */
    omit?: GalleryVideoOmit<ExtArgs> | null
    /**
     * The filter to search for the GalleryVideo to update in case it exists.
     */
    where: GalleryVideoWhereUniqueInput
    /**
     * In case the GalleryVideo found by the `where` argument doesn't exist, create a new GalleryVideo with this data.
     */
    create: XOR<GalleryVideoCreateInput, GalleryVideoUncheckedCreateInput>
    /**
     * In case the GalleryVideo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GalleryVideoUpdateInput, GalleryVideoUncheckedUpdateInput>
  }

  /**
   * GalleryVideo delete
   */
  export type GalleryVideoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryVideo
     */
    select?: GalleryVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryVideo
     */
    omit?: GalleryVideoOmit<ExtArgs> | null
    /**
     * Filter which GalleryVideo to delete.
     */
    where: GalleryVideoWhereUniqueInput
  }

  /**
   * GalleryVideo deleteMany
   */
  export type GalleryVideoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GalleryVideos to delete
     */
    where?: GalleryVideoWhereInput
    /**
     * Limit how many GalleryVideos to delete.
     */
    limit?: number
  }

  /**
   * GalleryVideo without action
   */
  export type GalleryVideoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryVideo
     */
    select?: GalleryVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryVideo
     */
    omit?: GalleryVideoOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updateAt: 'updateAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const NoticeScalarFieldEnum: {
    id: 'id',
    category: 'category',
    title: 'title',
    pdfUrl: 'pdfUrl',
    pdfKey: 'pdfKey',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NoticeScalarFieldEnum = (typeof NoticeScalarFieldEnum)[keyof typeof NoticeScalarFieldEnum]


  export const BulletinScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    pdfUrl: 'pdfUrl',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BulletinScalarFieldEnum = (typeof BulletinScalarFieldEnum)[keyof typeof BulletinScalarFieldEnum]


  export const FacultyMemberScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    contactNumber: 'contactNumber',
    profileImageUrl: 'profileImageUrl',
    imageKey: 'imageKey',
    designation: 'designation',
    isHod: 'isHod',
    facultyType: 'facultyType',
    cvUrl: 'cvUrl',
    pdfKey: 'pdfKey',
    socialLinks: 'socialLinks',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    department: 'department'
  };

  export type FacultyMemberScalarFieldEnum = (typeof FacultyMemberScalarFieldEnum)[keyof typeof FacultyMemberScalarFieldEnum]


  export const NewsUpdateScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    publishDate: 'publishDate',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NewsUpdateScalarFieldEnum = (typeof NewsUpdateScalarFieldEnum)[keyof typeof NewsUpdateScalarFieldEnum]


  export const AdvertisementScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    department: 'department',
    deadlineDate: 'deadlineDate',
    pdfUrl: 'pdfUrl',
    pdfKey: 'pdfKey',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdvertisementScalarFieldEnum = (typeof AdvertisementScalarFieldEnum)[keyof typeof AdvertisementScalarFieldEnum]


  export const TenderScalarFieldEnum: {
    id: 'id',
    title: 'title',
    reference: 'reference',
    publishedDate: 'publishedDate',
    closingDate: 'closingDate',
    category: 'category',
    pdfUrl: 'pdfUrl',
    pdfKey: 'pdfKey',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TenderScalarFieldEnum = (typeof TenderScalarFieldEnum)[keyof typeof TenderScalarFieldEnum]


  export const StaffFormScalarFieldEnum: {
    id: 'id',
    title: 'title',
    formType: 'formType',
    updatedDate: 'updatedDate',
    pdfUrl: 'pdfUrl',
    pdfKey: 'pdfKey',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type StaffFormScalarFieldEnum = (typeof StaffFormScalarFieldEnum)[keyof typeof StaffFormScalarFieldEnum]


  export const GalleryImageScalarFieldEnum: {
    id: 'id',
    imageUrl: 'imageUrl',
    category: 'category',
    imageKey: 'imageKey',
    createdAt: 'createdAt'
  };

  export type GalleryImageScalarFieldEnum = (typeof GalleryImageScalarFieldEnum)[keyof typeof GalleryImageScalarFieldEnum]


  export const GalleryVideoScalarFieldEnum: {
    id: 'id',
    youtubeUrl: 'youtubeUrl',
    youtubeKey: 'youtubeKey',
    category: 'category',
    title: 'title',
    createdAt: 'createdAt'
  };

  export type GalleryVideoScalarFieldEnum = (typeof GalleryVideoScalarFieldEnum)[keyof typeof GalleryVideoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'FacultyType'
   */
  export type EnumFacultyTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FacultyType'>
    


  /**
   * Reference to a field of type 'FacultyType[]'
   */
  export type ListEnumFacultyTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FacultyType[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Departments'
   */
  export type EnumDepartmentsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Departments'>
    


  /**
   * Reference to a field of type 'Departments[]'
   */
  export type ListEnumDepartmentsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Departments[]'>
    


  /**
   * Reference to a field of type 'StatusType'
   */
  export type EnumStatusTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusType'>
    


  /**
   * Reference to a field of type 'StatusType[]'
   */
  export type ListEnumStatusTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusType[]'>
    


  /**
   * Reference to a field of type 'GalleryCategory'
   */
  export type EnumGalleryCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GalleryCategory'>
    


  /**
   * Reference to a field of type 'GalleryCategory[]'
   */
  export type ListEnumGalleryCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GalleryCategory[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updateAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updateAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type NoticeWhereInput = {
    AND?: NoticeWhereInput | NoticeWhereInput[]
    OR?: NoticeWhereInput[]
    NOT?: NoticeWhereInput | NoticeWhereInput[]
    id?: StringFilter<"Notice"> | string
    category?: StringFilter<"Notice"> | string
    title?: StringFilter<"Notice"> | string
    pdfUrl?: StringFilter<"Notice"> | string
    pdfKey?: StringFilter<"Notice"> | string
    isActive?: BoolFilter<"Notice"> | boolean
    createdAt?: DateTimeFilter<"Notice"> | Date | string
    updatedAt?: DateTimeFilter<"Notice"> | Date | string
  }

  export type NoticeOrderByWithRelationInput = {
    id?: SortOrder
    category?: SortOrder
    title?: SortOrder
    pdfUrl?: SortOrder
    pdfKey?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NoticeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NoticeWhereInput | NoticeWhereInput[]
    OR?: NoticeWhereInput[]
    NOT?: NoticeWhereInput | NoticeWhereInput[]
    category?: StringFilter<"Notice"> | string
    title?: StringFilter<"Notice"> | string
    pdfUrl?: StringFilter<"Notice"> | string
    pdfKey?: StringFilter<"Notice"> | string
    isActive?: BoolFilter<"Notice"> | boolean
    createdAt?: DateTimeFilter<"Notice"> | Date | string
    updatedAt?: DateTimeFilter<"Notice"> | Date | string
  }, "id">

  export type NoticeOrderByWithAggregationInput = {
    id?: SortOrder
    category?: SortOrder
    title?: SortOrder
    pdfUrl?: SortOrder
    pdfKey?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NoticeCountOrderByAggregateInput
    _max?: NoticeMaxOrderByAggregateInput
    _min?: NoticeMinOrderByAggregateInput
  }

  export type NoticeScalarWhereWithAggregatesInput = {
    AND?: NoticeScalarWhereWithAggregatesInput | NoticeScalarWhereWithAggregatesInput[]
    OR?: NoticeScalarWhereWithAggregatesInput[]
    NOT?: NoticeScalarWhereWithAggregatesInput | NoticeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notice"> | string
    category?: StringWithAggregatesFilter<"Notice"> | string
    title?: StringWithAggregatesFilter<"Notice"> | string
    pdfUrl?: StringWithAggregatesFilter<"Notice"> | string
    pdfKey?: StringWithAggregatesFilter<"Notice"> | string
    isActive?: BoolWithAggregatesFilter<"Notice"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Notice"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Notice"> | Date | string
  }

  export type BulletinWhereInput = {
    AND?: BulletinWhereInput | BulletinWhereInput[]
    OR?: BulletinWhereInput[]
    NOT?: BulletinWhereInput | BulletinWhereInput[]
    id?: StringFilter<"Bulletin"> | string
    title?: StringFilter<"Bulletin"> | string
    content?: StringNullableFilter<"Bulletin"> | string | null
    pdfUrl?: StringNullableFilter<"Bulletin"> | string | null
    isActive?: BoolFilter<"Bulletin"> | boolean
    createdAt?: DateTimeFilter<"Bulletin"> | Date | string
    updatedAt?: DateTimeFilter<"Bulletin"> | Date | string
  }

  export type BulletinOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrderInput | SortOrder
    pdfUrl?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BulletinWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BulletinWhereInput | BulletinWhereInput[]
    OR?: BulletinWhereInput[]
    NOT?: BulletinWhereInput | BulletinWhereInput[]
    title?: StringFilter<"Bulletin"> | string
    content?: StringNullableFilter<"Bulletin"> | string | null
    pdfUrl?: StringNullableFilter<"Bulletin"> | string | null
    isActive?: BoolFilter<"Bulletin"> | boolean
    createdAt?: DateTimeFilter<"Bulletin"> | Date | string
    updatedAt?: DateTimeFilter<"Bulletin"> | Date | string
  }, "id">

  export type BulletinOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrderInput | SortOrder
    pdfUrl?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BulletinCountOrderByAggregateInput
    _max?: BulletinMaxOrderByAggregateInput
    _min?: BulletinMinOrderByAggregateInput
  }

  export type BulletinScalarWhereWithAggregatesInput = {
    AND?: BulletinScalarWhereWithAggregatesInput | BulletinScalarWhereWithAggregatesInput[]
    OR?: BulletinScalarWhereWithAggregatesInput[]
    NOT?: BulletinScalarWhereWithAggregatesInput | BulletinScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Bulletin"> | string
    title?: StringWithAggregatesFilter<"Bulletin"> | string
    content?: StringNullableWithAggregatesFilter<"Bulletin"> | string | null
    pdfUrl?: StringNullableWithAggregatesFilter<"Bulletin"> | string | null
    isActive?: BoolWithAggregatesFilter<"Bulletin"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Bulletin"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Bulletin"> | Date | string
  }

  export type FacultyMemberWhereInput = {
    AND?: FacultyMemberWhereInput | FacultyMemberWhereInput[]
    OR?: FacultyMemberWhereInput[]
    NOT?: FacultyMemberWhereInput | FacultyMemberWhereInput[]
    id?: StringFilter<"FacultyMember"> | string
    firstName?: StringFilter<"FacultyMember"> | string
    lastName?: StringNullableFilter<"FacultyMember"> | string | null
    email?: StringFilter<"FacultyMember"> | string
    contactNumber?: StringNullableFilter<"FacultyMember"> | string | null
    profileImageUrl?: StringNullableFilter<"FacultyMember"> | string | null
    imageKey?: StringNullableFilter<"FacultyMember"> | string | null
    designation?: StringFilter<"FacultyMember"> | string
    isHod?: BoolFilter<"FacultyMember"> | boolean
    facultyType?: EnumFacultyTypeFilter<"FacultyMember"> | $Enums.FacultyType
    cvUrl?: StringNullableFilter<"FacultyMember"> | string | null
    pdfKey?: StringNullableFilter<"FacultyMember"> | string | null
    socialLinks?: JsonNullableFilter<"FacultyMember">
    createdAt?: DateTimeFilter<"FacultyMember"> | Date | string
    updatedAt?: DateTimeFilter<"FacultyMember"> | Date | string
    department?: EnumDepartmentsFilter<"FacultyMember"> | $Enums.Departments
  }

  export type FacultyMemberOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrderInput | SortOrder
    email?: SortOrder
    contactNumber?: SortOrderInput | SortOrder
    profileImageUrl?: SortOrderInput | SortOrder
    imageKey?: SortOrderInput | SortOrder
    designation?: SortOrder
    isHod?: SortOrder
    facultyType?: SortOrder
    cvUrl?: SortOrderInput | SortOrder
    pdfKey?: SortOrderInput | SortOrder
    socialLinks?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    department?: SortOrder
  }

  export type FacultyMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FacultyMemberWhereInput | FacultyMemberWhereInput[]
    OR?: FacultyMemberWhereInput[]
    NOT?: FacultyMemberWhereInput | FacultyMemberWhereInput[]
    firstName?: StringFilter<"FacultyMember"> | string
    lastName?: StringNullableFilter<"FacultyMember"> | string | null
    email?: StringFilter<"FacultyMember"> | string
    contactNumber?: StringNullableFilter<"FacultyMember"> | string | null
    profileImageUrl?: StringNullableFilter<"FacultyMember"> | string | null
    imageKey?: StringNullableFilter<"FacultyMember"> | string | null
    designation?: StringFilter<"FacultyMember"> | string
    isHod?: BoolFilter<"FacultyMember"> | boolean
    facultyType?: EnumFacultyTypeFilter<"FacultyMember"> | $Enums.FacultyType
    cvUrl?: StringNullableFilter<"FacultyMember"> | string | null
    pdfKey?: StringNullableFilter<"FacultyMember"> | string | null
    socialLinks?: JsonNullableFilter<"FacultyMember">
    createdAt?: DateTimeFilter<"FacultyMember"> | Date | string
    updatedAt?: DateTimeFilter<"FacultyMember"> | Date | string
    department?: EnumDepartmentsFilter<"FacultyMember"> | $Enums.Departments
  }, "id">

  export type FacultyMemberOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrderInput | SortOrder
    email?: SortOrder
    contactNumber?: SortOrderInput | SortOrder
    profileImageUrl?: SortOrderInput | SortOrder
    imageKey?: SortOrderInput | SortOrder
    designation?: SortOrder
    isHod?: SortOrder
    facultyType?: SortOrder
    cvUrl?: SortOrderInput | SortOrder
    pdfKey?: SortOrderInput | SortOrder
    socialLinks?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    department?: SortOrder
    _count?: FacultyMemberCountOrderByAggregateInput
    _max?: FacultyMemberMaxOrderByAggregateInput
    _min?: FacultyMemberMinOrderByAggregateInput
  }

  export type FacultyMemberScalarWhereWithAggregatesInput = {
    AND?: FacultyMemberScalarWhereWithAggregatesInput | FacultyMemberScalarWhereWithAggregatesInput[]
    OR?: FacultyMemberScalarWhereWithAggregatesInput[]
    NOT?: FacultyMemberScalarWhereWithAggregatesInput | FacultyMemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FacultyMember"> | string
    firstName?: StringWithAggregatesFilter<"FacultyMember"> | string
    lastName?: StringNullableWithAggregatesFilter<"FacultyMember"> | string | null
    email?: StringWithAggregatesFilter<"FacultyMember"> | string
    contactNumber?: StringNullableWithAggregatesFilter<"FacultyMember"> | string | null
    profileImageUrl?: StringNullableWithAggregatesFilter<"FacultyMember"> | string | null
    imageKey?: StringNullableWithAggregatesFilter<"FacultyMember"> | string | null
    designation?: StringWithAggregatesFilter<"FacultyMember"> | string
    isHod?: BoolWithAggregatesFilter<"FacultyMember"> | boolean
    facultyType?: EnumFacultyTypeWithAggregatesFilter<"FacultyMember"> | $Enums.FacultyType
    cvUrl?: StringNullableWithAggregatesFilter<"FacultyMember"> | string | null
    pdfKey?: StringNullableWithAggregatesFilter<"FacultyMember"> | string | null
    socialLinks?: JsonNullableWithAggregatesFilter<"FacultyMember">
    createdAt?: DateTimeWithAggregatesFilter<"FacultyMember"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FacultyMember"> | Date | string
    department?: EnumDepartmentsWithAggregatesFilter<"FacultyMember"> | $Enums.Departments
  }

  export type NewsUpdateWhereInput = {
    AND?: NewsUpdateWhereInput | NewsUpdateWhereInput[]
    OR?: NewsUpdateWhereInput[]
    NOT?: NewsUpdateWhereInput | NewsUpdateWhereInput[]
    id?: StringFilter<"NewsUpdate"> | string
    title?: StringFilter<"NewsUpdate"> | string
    description?: StringFilter<"NewsUpdate"> | string
    publishDate?: DateTimeFilter<"NewsUpdate"> | Date | string
    isActive?: BoolFilter<"NewsUpdate"> | boolean
    createdAt?: DateTimeFilter<"NewsUpdate"> | Date | string
    updatedAt?: DateTimeFilter<"NewsUpdate"> | Date | string
  }

  export type NewsUpdateOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    publishDate?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsUpdateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NewsUpdateWhereInput | NewsUpdateWhereInput[]
    OR?: NewsUpdateWhereInput[]
    NOT?: NewsUpdateWhereInput | NewsUpdateWhereInput[]
    title?: StringFilter<"NewsUpdate"> | string
    description?: StringFilter<"NewsUpdate"> | string
    publishDate?: DateTimeFilter<"NewsUpdate"> | Date | string
    isActive?: BoolFilter<"NewsUpdate"> | boolean
    createdAt?: DateTimeFilter<"NewsUpdate"> | Date | string
    updatedAt?: DateTimeFilter<"NewsUpdate"> | Date | string
  }, "id">

  export type NewsUpdateOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    publishDate?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NewsUpdateCountOrderByAggregateInput
    _max?: NewsUpdateMaxOrderByAggregateInput
    _min?: NewsUpdateMinOrderByAggregateInput
  }

  export type NewsUpdateScalarWhereWithAggregatesInput = {
    AND?: NewsUpdateScalarWhereWithAggregatesInput | NewsUpdateScalarWhereWithAggregatesInput[]
    OR?: NewsUpdateScalarWhereWithAggregatesInput[]
    NOT?: NewsUpdateScalarWhereWithAggregatesInput | NewsUpdateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NewsUpdate"> | string
    title?: StringWithAggregatesFilter<"NewsUpdate"> | string
    description?: StringWithAggregatesFilter<"NewsUpdate"> | string
    publishDate?: DateTimeWithAggregatesFilter<"NewsUpdate"> | Date | string
    isActive?: BoolWithAggregatesFilter<"NewsUpdate"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"NewsUpdate"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"NewsUpdate"> | Date | string
  }

  export type AdvertisementWhereInput = {
    AND?: AdvertisementWhereInput | AdvertisementWhereInput[]
    OR?: AdvertisementWhereInput[]
    NOT?: AdvertisementWhereInput | AdvertisementWhereInput[]
    id?: StringFilter<"Advertisement"> | string
    title?: StringFilter<"Advertisement"> | string
    description?: StringNullableFilter<"Advertisement"> | string | null
    department?: StringFilter<"Advertisement"> | string
    deadlineDate?: DateTimeNullableFilter<"Advertisement"> | Date | string | null
    pdfUrl?: StringNullableFilter<"Advertisement"> | string | null
    pdfKey?: StringNullableFilter<"Advertisement"> | string | null
    isActive?: BoolFilter<"Advertisement"> | boolean
    createdAt?: DateTimeFilter<"Advertisement"> | Date | string
    updatedAt?: DateTimeFilter<"Advertisement"> | Date | string
  }

  export type AdvertisementOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    department?: SortOrder
    deadlineDate?: SortOrderInput | SortOrder
    pdfUrl?: SortOrderInput | SortOrder
    pdfKey?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdvertisementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AdvertisementWhereInput | AdvertisementWhereInput[]
    OR?: AdvertisementWhereInput[]
    NOT?: AdvertisementWhereInput | AdvertisementWhereInput[]
    title?: StringFilter<"Advertisement"> | string
    description?: StringNullableFilter<"Advertisement"> | string | null
    department?: StringFilter<"Advertisement"> | string
    deadlineDate?: DateTimeNullableFilter<"Advertisement"> | Date | string | null
    pdfUrl?: StringNullableFilter<"Advertisement"> | string | null
    pdfKey?: StringNullableFilter<"Advertisement"> | string | null
    isActive?: BoolFilter<"Advertisement"> | boolean
    createdAt?: DateTimeFilter<"Advertisement"> | Date | string
    updatedAt?: DateTimeFilter<"Advertisement"> | Date | string
  }, "id">

  export type AdvertisementOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    department?: SortOrder
    deadlineDate?: SortOrderInput | SortOrder
    pdfUrl?: SortOrderInput | SortOrder
    pdfKey?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdvertisementCountOrderByAggregateInput
    _max?: AdvertisementMaxOrderByAggregateInput
    _min?: AdvertisementMinOrderByAggregateInput
  }

  export type AdvertisementScalarWhereWithAggregatesInput = {
    AND?: AdvertisementScalarWhereWithAggregatesInput | AdvertisementScalarWhereWithAggregatesInput[]
    OR?: AdvertisementScalarWhereWithAggregatesInput[]
    NOT?: AdvertisementScalarWhereWithAggregatesInput | AdvertisementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Advertisement"> | string
    title?: StringWithAggregatesFilter<"Advertisement"> | string
    description?: StringNullableWithAggregatesFilter<"Advertisement"> | string | null
    department?: StringWithAggregatesFilter<"Advertisement"> | string
    deadlineDate?: DateTimeNullableWithAggregatesFilter<"Advertisement"> | Date | string | null
    pdfUrl?: StringNullableWithAggregatesFilter<"Advertisement"> | string | null
    pdfKey?: StringNullableWithAggregatesFilter<"Advertisement"> | string | null
    isActive?: BoolWithAggregatesFilter<"Advertisement"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Advertisement"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Advertisement"> | Date | string
  }

  export type TenderWhereInput = {
    AND?: TenderWhereInput | TenderWhereInput[]
    OR?: TenderWhereInput[]
    NOT?: TenderWhereInput | TenderWhereInput[]
    id?: StringFilter<"Tender"> | string
    title?: StringFilter<"Tender"> | string
    reference?: StringNullableFilter<"Tender"> | string | null
    publishedDate?: DateTimeFilter<"Tender"> | Date | string
    closingDate?: DateTimeFilter<"Tender"> | Date | string
    category?: StringNullableFilter<"Tender"> | string | null
    pdfUrl?: StringFilter<"Tender"> | string
    pdfKey?: StringNullableFilter<"Tender"> | string | null
    status?: EnumStatusTypeFilter<"Tender"> | $Enums.StatusType
    createdAt?: DateTimeFilter<"Tender"> | Date | string
    updatedAt?: DateTimeFilter<"Tender"> | Date | string
  }

  export type TenderOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    reference?: SortOrderInput | SortOrder
    publishedDate?: SortOrder
    closingDate?: SortOrder
    category?: SortOrderInput | SortOrder
    pdfUrl?: SortOrder
    pdfKey?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TenderWhereInput | TenderWhereInput[]
    OR?: TenderWhereInput[]
    NOT?: TenderWhereInput | TenderWhereInput[]
    title?: StringFilter<"Tender"> | string
    reference?: StringNullableFilter<"Tender"> | string | null
    publishedDate?: DateTimeFilter<"Tender"> | Date | string
    closingDate?: DateTimeFilter<"Tender"> | Date | string
    category?: StringNullableFilter<"Tender"> | string | null
    pdfUrl?: StringFilter<"Tender"> | string
    pdfKey?: StringNullableFilter<"Tender"> | string | null
    status?: EnumStatusTypeFilter<"Tender"> | $Enums.StatusType
    createdAt?: DateTimeFilter<"Tender"> | Date | string
    updatedAt?: DateTimeFilter<"Tender"> | Date | string
  }, "id">

  export type TenderOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    reference?: SortOrderInput | SortOrder
    publishedDate?: SortOrder
    closingDate?: SortOrder
    category?: SortOrderInput | SortOrder
    pdfUrl?: SortOrder
    pdfKey?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TenderCountOrderByAggregateInput
    _max?: TenderMaxOrderByAggregateInput
    _min?: TenderMinOrderByAggregateInput
  }

  export type TenderScalarWhereWithAggregatesInput = {
    AND?: TenderScalarWhereWithAggregatesInput | TenderScalarWhereWithAggregatesInput[]
    OR?: TenderScalarWhereWithAggregatesInput[]
    NOT?: TenderScalarWhereWithAggregatesInput | TenderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tender"> | string
    title?: StringWithAggregatesFilter<"Tender"> | string
    reference?: StringNullableWithAggregatesFilter<"Tender"> | string | null
    publishedDate?: DateTimeWithAggregatesFilter<"Tender"> | Date | string
    closingDate?: DateTimeWithAggregatesFilter<"Tender"> | Date | string
    category?: StringNullableWithAggregatesFilter<"Tender"> | string | null
    pdfUrl?: StringWithAggregatesFilter<"Tender"> | string
    pdfKey?: StringNullableWithAggregatesFilter<"Tender"> | string | null
    status?: EnumStatusTypeWithAggregatesFilter<"Tender"> | $Enums.StatusType
    createdAt?: DateTimeWithAggregatesFilter<"Tender"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tender"> | Date | string
  }

  export type StaffFormWhereInput = {
    AND?: StaffFormWhereInput | StaffFormWhereInput[]
    OR?: StaffFormWhereInput[]
    NOT?: StaffFormWhereInput | StaffFormWhereInput[]
    id?: StringFilter<"StaffForm"> | string
    title?: StringFilter<"StaffForm"> | string
    formType?: StringFilter<"StaffForm"> | string
    updatedDate?: DateTimeFilter<"StaffForm"> | Date | string
    pdfUrl?: StringFilter<"StaffForm"> | string
    pdfKey?: StringNullableFilter<"StaffForm"> | string | null
    isActive?: BoolFilter<"StaffForm"> | boolean
    createdAt?: DateTimeFilter<"StaffForm"> | Date | string
  }

  export type StaffFormOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    formType?: SortOrder
    updatedDate?: SortOrder
    pdfUrl?: SortOrder
    pdfKey?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type StaffFormWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StaffFormWhereInput | StaffFormWhereInput[]
    OR?: StaffFormWhereInput[]
    NOT?: StaffFormWhereInput | StaffFormWhereInput[]
    title?: StringFilter<"StaffForm"> | string
    formType?: StringFilter<"StaffForm"> | string
    updatedDate?: DateTimeFilter<"StaffForm"> | Date | string
    pdfUrl?: StringFilter<"StaffForm"> | string
    pdfKey?: StringNullableFilter<"StaffForm"> | string | null
    isActive?: BoolFilter<"StaffForm"> | boolean
    createdAt?: DateTimeFilter<"StaffForm"> | Date | string
  }, "id">

  export type StaffFormOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    formType?: SortOrder
    updatedDate?: SortOrder
    pdfUrl?: SortOrder
    pdfKey?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: StaffFormCountOrderByAggregateInput
    _max?: StaffFormMaxOrderByAggregateInput
    _min?: StaffFormMinOrderByAggregateInput
  }

  export type StaffFormScalarWhereWithAggregatesInput = {
    AND?: StaffFormScalarWhereWithAggregatesInput | StaffFormScalarWhereWithAggregatesInput[]
    OR?: StaffFormScalarWhereWithAggregatesInput[]
    NOT?: StaffFormScalarWhereWithAggregatesInput | StaffFormScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StaffForm"> | string
    title?: StringWithAggregatesFilter<"StaffForm"> | string
    formType?: StringWithAggregatesFilter<"StaffForm"> | string
    updatedDate?: DateTimeWithAggregatesFilter<"StaffForm"> | Date | string
    pdfUrl?: StringWithAggregatesFilter<"StaffForm"> | string
    pdfKey?: StringNullableWithAggregatesFilter<"StaffForm"> | string | null
    isActive?: BoolWithAggregatesFilter<"StaffForm"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"StaffForm"> | Date | string
  }

  export type GalleryImageWhereInput = {
    AND?: GalleryImageWhereInput | GalleryImageWhereInput[]
    OR?: GalleryImageWhereInput[]
    NOT?: GalleryImageWhereInput | GalleryImageWhereInput[]
    id?: StringFilter<"GalleryImage"> | string
    imageUrl?: StringFilter<"GalleryImage"> | string
    category?: EnumGalleryCategoryFilter<"GalleryImage"> | $Enums.GalleryCategory
    imageKey?: StringFilter<"GalleryImage"> | string
    createdAt?: DateTimeFilter<"GalleryImage"> | Date | string
  }

  export type GalleryImageOrderByWithRelationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    category?: SortOrder
    imageKey?: SortOrder
    createdAt?: SortOrder
  }

  export type GalleryImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GalleryImageWhereInput | GalleryImageWhereInput[]
    OR?: GalleryImageWhereInput[]
    NOT?: GalleryImageWhereInput | GalleryImageWhereInput[]
    imageUrl?: StringFilter<"GalleryImage"> | string
    category?: EnumGalleryCategoryFilter<"GalleryImage"> | $Enums.GalleryCategory
    imageKey?: StringFilter<"GalleryImage"> | string
    createdAt?: DateTimeFilter<"GalleryImage"> | Date | string
  }, "id">

  export type GalleryImageOrderByWithAggregationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    category?: SortOrder
    imageKey?: SortOrder
    createdAt?: SortOrder
    _count?: GalleryImageCountOrderByAggregateInput
    _max?: GalleryImageMaxOrderByAggregateInput
    _min?: GalleryImageMinOrderByAggregateInput
  }

  export type GalleryImageScalarWhereWithAggregatesInput = {
    AND?: GalleryImageScalarWhereWithAggregatesInput | GalleryImageScalarWhereWithAggregatesInput[]
    OR?: GalleryImageScalarWhereWithAggregatesInput[]
    NOT?: GalleryImageScalarWhereWithAggregatesInput | GalleryImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GalleryImage"> | string
    imageUrl?: StringWithAggregatesFilter<"GalleryImage"> | string
    category?: EnumGalleryCategoryWithAggregatesFilter<"GalleryImage"> | $Enums.GalleryCategory
    imageKey?: StringWithAggregatesFilter<"GalleryImage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"GalleryImage"> | Date | string
  }

  export type GalleryVideoWhereInput = {
    AND?: GalleryVideoWhereInput | GalleryVideoWhereInput[]
    OR?: GalleryVideoWhereInput[]
    NOT?: GalleryVideoWhereInput | GalleryVideoWhereInput[]
    id?: StringFilter<"GalleryVideo"> | string
    youtubeUrl?: StringFilter<"GalleryVideo"> | string
    youtubeKey?: StringFilter<"GalleryVideo"> | string
    category?: StringFilter<"GalleryVideo"> | string
    title?: StringNullableFilter<"GalleryVideo"> | string | null
    createdAt?: DateTimeFilter<"GalleryVideo"> | Date | string
  }

  export type GalleryVideoOrderByWithRelationInput = {
    id?: SortOrder
    youtubeUrl?: SortOrder
    youtubeKey?: SortOrder
    category?: SortOrder
    title?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type GalleryVideoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GalleryVideoWhereInput | GalleryVideoWhereInput[]
    OR?: GalleryVideoWhereInput[]
    NOT?: GalleryVideoWhereInput | GalleryVideoWhereInput[]
    youtubeUrl?: StringFilter<"GalleryVideo"> | string
    youtubeKey?: StringFilter<"GalleryVideo"> | string
    category?: StringFilter<"GalleryVideo"> | string
    title?: StringNullableFilter<"GalleryVideo"> | string | null
    createdAt?: DateTimeFilter<"GalleryVideo"> | Date | string
  }, "id">

  export type GalleryVideoOrderByWithAggregationInput = {
    id?: SortOrder
    youtubeUrl?: SortOrder
    youtubeKey?: SortOrder
    category?: SortOrder
    title?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: GalleryVideoCountOrderByAggregateInput
    _max?: GalleryVideoMaxOrderByAggregateInput
    _min?: GalleryVideoMinOrderByAggregateInput
  }

  export type GalleryVideoScalarWhereWithAggregatesInput = {
    AND?: GalleryVideoScalarWhereWithAggregatesInput | GalleryVideoScalarWhereWithAggregatesInput[]
    OR?: GalleryVideoScalarWhereWithAggregatesInput[]
    NOT?: GalleryVideoScalarWhereWithAggregatesInput | GalleryVideoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GalleryVideo"> | string
    youtubeUrl?: StringWithAggregatesFilter<"GalleryVideo"> | string
    youtubeKey?: StringWithAggregatesFilter<"GalleryVideo"> | string
    category?: StringWithAggregatesFilter<"GalleryVideo"> | string
    title?: StringNullableWithAggregatesFilter<"GalleryVideo"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"GalleryVideo"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoticeCreateInput = {
    id?: string
    category: string
    title: string
    pdfUrl: string
    pdfKey: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NoticeUncheckedCreateInput = {
    id?: string
    category: string
    title: string
    pdfUrl: string
    pdfKey: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NoticeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    pdfUrl?: StringFieldUpdateOperationsInput | string
    pdfKey?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoticeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    pdfUrl?: StringFieldUpdateOperationsInput | string
    pdfKey?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoticeCreateManyInput = {
    id?: string
    category: string
    title: string
    pdfUrl: string
    pdfKey: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NoticeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    pdfUrl?: StringFieldUpdateOperationsInput | string
    pdfKey?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoticeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    pdfUrl?: StringFieldUpdateOperationsInput | string
    pdfKey?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BulletinCreateInput = {
    id?: string
    title: string
    content?: string | null
    pdfUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BulletinUncheckedCreateInput = {
    id?: string
    title: string
    content?: string | null
    pdfUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BulletinUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BulletinUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BulletinCreateManyInput = {
    id?: string
    title: string
    content?: string | null
    pdfUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BulletinUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BulletinUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacultyMemberCreateInput = {
    id?: string
    firstName: string
    lastName?: string | null
    email: string
    contactNumber?: string | null
    profileImageUrl?: string | null
    imageKey?: string | null
    designation: string
    isHod?: boolean
    facultyType: $Enums.FacultyType
    cvUrl?: string | null
    pdfKey?: string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    department: $Enums.Departments
  }

  export type FacultyMemberUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName?: string | null
    email: string
    contactNumber?: string | null
    profileImageUrl?: string | null
    imageKey?: string | null
    designation: string
    isHod?: boolean
    facultyType: $Enums.FacultyType
    cvUrl?: string | null
    pdfKey?: string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    department: $Enums.Departments
  }

  export type FacultyMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageKey?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: StringFieldUpdateOperationsInput | string
    isHod?: BoolFieldUpdateOperationsInput | boolean
    facultyType?: EnumFacultyTypeFieldUpdateOperationsInput | $Enums.FacultyType
    cvUrl?: NullableStringFieldUpdateOperationsInput | string | null
    pdfKey?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: EnumDepartmentsFieldUpdateOperationsInput | $Enums.Departments
  }

  export type FacultyMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageKey?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: StringFieldUpdateOperationsInput | string
    isHod?: BoolFieldUpdateOperationsInput | boolean
    facultyType?: EnumFacultyTypeFieldUpdateOperationsInput | $Enums.FacultyType
    cvUrl?: NullableStringFieldUpdateOperationsInput | string | null
    pdfKey?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: EnumDepartmentsFieldUpdateOperationsInput | $Enums.Departments
  }

  export type FacultyMemberCreateManyInput = {
    id?: string
    firstName: string
    lastName?: string | null
    email: string
    contactNumber?: string | null
    profileImageUrl?: string | null
    imageKey?: string | null
    designation: string
    isHod?: boolean
    facultyType: $Enums.FacultyType
    cvUrl?: string | null
    pdfKey?: string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    department: $Enums.Departments
  }

  export type FacultyMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageKey?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: StringFieldUpdateOperationsInput | string
    isHod?: BoolFieldUpdateOperationsInput | boolean
    facultyType?: EnumFacultyTypeFieldUpdateOperationsInput | $Enums.FacultyType
    cvUrl?: NullableStringFieldUpdateOperationsInput | string | null
    pdfKey?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: EnumDepartmentsFieldUpdateOperationsInput | $Enums.Departments
  }

  export type FacultyMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageKey?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: StringFieldUpdateOperationsInput | string
    isHod?: BoolFieldUpdateOperationsInput | boolean
    facultyType?: EnumFacultyTypeFieldUpdateOperationsInput | $Enums.FacultyType
    cvUrl?: NullableStringFieldUpdateOperationsInput | string | null
    pdfKey?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: EnumDepartmentsFieldUpdateOperationsInput | $Enums.Departments
  }

  export type NewsUpdateCreateInput = {
    id?: string
    title: string
    description: string
    publishDate: Date | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsUpdateUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    publishDate: Date | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsUpdateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    publishDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsUpdateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    publishDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsUpdateCreateManyInput = {
    id?: string
    title: string
    description: string
    publishDate: Date | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsUpdateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    publishDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsUpdateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    publishDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdvertisementCreateInput = {
    id?: string
    title: string
    description?: string | null
    department: string
    deadlineDate?: Date | string | null
    pdfUrl?: string | null
    pdfKey?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdvertisementUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    department: string
    deadlineDate?: Date | string | null
    pdfUrl?: string | null
    pdfKey?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdvertisementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    department?: StringFieldUpdateOperationsInput | string
    deadlineDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    pdfKey?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdvertisementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    department?: StringFieldUpdateOperationsInput | string
    deadlineDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    pdfKey?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdvertisementCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    department: string
    deadlineDate?: Date | string | null
    pdfUrl?: string | null
    pdfKey?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdvertisementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    department?: StringFieldUpdateOperationsInput | string
    deadlineDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    pdfKey?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdvertisementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    department?: StringFieldUpdateOperationsInput | string
    deadlineDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    pdfKey?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenderCreateInput = {
    id?: string
    title: string
    reference?: string | null
    publishedDate: Date | string
    closingDate: Date | string
    category?: string | null
    pdfUrl: string
    pdfKey?: string | null
    status: $Enums.StatusType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TenderUncheckedCreateInput = {
    id?: string
    title: string
    reference?: string | null
    publishedDate: Date | string
    closingDate: Date | string
    category?: string | null
    pdfUrl: string
    pdfKey?: string | null
    status: $Enums.StatusType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TenderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    publishedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    closingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    pdfUrl?: StringFieldUpdateOperationsInput | string
    pdfKey?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusTypeFieldUpdateOperationsInput | $Enums.StatusType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    publishedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    closingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    pdfUrl?: StringFieldUpdateOperationsInput | string
    pdfKey?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusTypeFieldUpdateOperationsInput | $Enums.StatusType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenderCreateManyInput = {
    id?: string
    title: string
    reference?: string | null
    publishedDate: Date | string
    closingDate: Date | string
    category?: string | null
    pdfUrl: string
    pdfKey?: string | null
    status: $Enums.StatusType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TenderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    publishedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    closingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    pdfUrl?: StringFieldUpdateOperationsInput | string
    pdfKey?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusTypeFieldUpdateOperationsInput | $Enums.StatusType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    publishedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    closingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    pdfUrl?: StringFieldUpdateOperationsInput | string
    pdfKey?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusTypeFieldUpdateOperationsInput | $Enums.StatusType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffFormCreateInput = {
    id?: string
    title: string
    formType: string
    updatedDate: Date | string
    pdfUrl: string
    pdfKey?: string | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type StaffFormUncheckedCreateInput = {
    id?: string
    title: string
    formType: string
    updatedDate: Date | string
    pdfUrl: string
    pdfKey?: string | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type StaffFormUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    formType?: StringFieldUpdateOperationsInput | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    pdfUrl?: StringFieldUpdateOperationsInput | string
    pdfKey?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffFormUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    formType?: StringFieldUpdateOperationsInput | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    pdfUrl?: StringFieldUpdateOperationsInput | string
    pdfKey?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffFormCreateManyInput = {
    id?: string
    title: string
    formType: string
    updatedDate: Date | string
    pdfUrl: string
    pdfKey?: string | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type StaffFormUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    formType?: StringFieldUpdateOperationsInput | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    pdfUrl?: StringFieldUpdateOperationsInput | string
    pdfKey?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffFormUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    formType?: StringFieldUpdateOperationsInput | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    pdfUrl?: StringFieldUpdateOperationsInput | string
    pdfKey?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryImageCreateInput = {
    id?: string
    imageUrl: string
    category: $Enums.GalleryCategory
    imageKey: string
    createdAt?: Date | string
  }

  export type GalleryImageUncheckedCreateInput = {
    id?: string
    imageUrl: string
    category: $Enums.GalleryCategory
    imageKey: string
    createdAt?: Date | string
  }

  export type GalleryImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    category?: EnumGalleryCategoryFieldUpdateOperationsInput | $Enums.GalleryCategory
    imageKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    category?: EnumGalleryCategoryFieldUpdateOperationsInput | $Enums.GalleryCategory
    imageKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryImageCreateManyInput = {
    id?: string
    imageUrl: string
    category: $Enums.GalleryCategory
    imageKey: string
    createdAt?: Date | string
  }

  export type GalleryImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    category?: EnumGalleryCategoryFieldUpdateOperationsInput | $Enums.GalleryCategory
    imageKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    category?: EnumGalleryCategoryFieldUpdateOperationsInput | $Enums.GalleryCategory
    imageKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryVideoCreateInput = {
    id?: string
    youtubeUrl: string
    youtubeKey: string
    category: string
    title?: string | null
    createdAt?: Date | string
  }

  export type GalleryVideoUncheckedCreateInput = {
    id?: string
    youtubeUrl: string
    youtubeKey: string
    category: string
    title?: string | null
    createdAt?: Date | string
  }

  export type GalleryVideoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    youtubeUrl?: StringFieldUpdateOperationsInput | string
    youtubeKey?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryVideoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    youtubeUrl?: StringFieldUpdateOperationsInput | string
    youtubeKey?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryVideoCreateManyInput = {
    id?: string
    youtubeUrl: string
    youtubeKey: string
    category: string
    title?: string | null
    createdAt?: Date | string
  }

  export type GalleryVideoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    youtubeUrl?: StringFieldUpdateOperationsInput | string
    youtubeKey?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryVideoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    youtubeUrl?: StringFieldUpdateOperationsInput | string
    youtubeKey?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NoticeCountOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    title?: SortOrder
    pdfUrl?: SortOrder
    pdfKey?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NoticeMaxOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    title?: SortOrder
    pdfUrl?: SortOrder
    pdfKey?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NoticeMinOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    title?: SortOrder
    pdfUrl?: SortOrder
    pdfKey?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BulletinCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    pdfUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BulletinMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    pdfUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BulletinMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    pdfUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumFacultyTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FacultyType | EnumFacultyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FacultyType[] | ListEnumFacultyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FacultyType[] | ListEnumFacultyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFacultyTypeFilter<$PrismaModel> | $Enums.FacultyType
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type EnumDepartmentsFilter<$PrismaModel = never> = {
    equals?: $Enums.Departments | EnumDepartmentsFieldRefInput<$PrismaModel>
    in?: $Enums.Departments[] | ListEnumDepartmentsFieldRefInput<$PrismaModel>
    notIn?: $Enums.Departments[] | ListEnumDepartmentsFieldRefInput<$PrismaModel>
    not?: NestedEnumDepartmentsFilter<$PrismaModel> | $Enums.Departments
  }

  export type FacultyMemberCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    contactNumber?: SortOrder
    profileImageUrl?: SortOrder
    imageKey?: SortOrder
    designation?: SortOrder
    isHod?: SortOrder
    facultyType?: SortOrder
    cvUrl?: SortOrder
    pdfKey?: SortOrder
    socialLinks?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    department?: SortOrder
  }

  export type FacultyMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    contactNumber?: SortOrder
    profileImageUrl?: SortOrder
    imageKey?: SortOrder
    designation?: SortOrder
    isHod?: SortOrder
    facultyType?: SortOrder
    cvUrl?: SortOrder
    pdfKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    department?: SortOrder
  }

  export type FacultyMemberMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    contactNumber?: SortOrder
    profileImageUrl?: SortOrder
    imageKey?: SortOrder
    designation?: SortOrder
    isHod?: SortOrder
    facultyType?: SortOrder
    cvUrl?: SortOrder
    pdfKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    department?: SortOrder
  }

  export type EnumFacultyTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FacultyType | EnumFacultyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FacultyType[] | ListEnumFacultyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FacultyType[] | ListEnumFacultyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFacultyTypeWithAggregatesFilter<$PrismaModel> | $Enums.FacultyType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFacultyTypeFilter<$PrismaModel>
    _max?: NestedEnumFacultyTypeFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumDepartmentsWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Departments | EnumDepartmentsFieldRefInput<$PrismaModel>
    in?: $Enums.Departments[] | ListEnumDepartmentsFieldRefInput<$PrismaModel>
    notIn?: $Enums.Departments[] | ListEnumDepartmentsFieldRefInput<$PrismaModel>
    not?: NestedEnumDepartmentsWithAggregatesFilter<$PrismaModel> | $Enums.Departments
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDepartmentsFilter<$PrismaModel>
    _max?: NestedEnumDepartmentsFilter<$PrismaModel>
  }

  export type NewsUpdateCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    publishDate?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsUpdateMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    publishDate?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsUpdateMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    publishDate?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AdvertisementCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    department?: SortOrder
    deadlineDate?: SortOrder
    pdfUrl?: SortOrder
    pdfKey?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdvertisementMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    department?: SortOrder
    deadlineDate?: SortOrder
    pdfUrl?: SortOrder
    pdfKey?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdvertisementMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    department?: SortOrder
    deadlineDate?: SortOrder
    pdfUrl?: SortOrder
    pdfKey?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumStatusTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusType | EnumStatusTypeFieldRefInput<$PrismaModel>
    in?: $Enums.StatusType[] | ListEnumStatusTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusType[] | ListEnumStatusTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusTypeFilter<$PrismaModel> | $Enums.StatusType
  }

  export type TenderCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    reference?: SortOrder
    publishedDate?: SortOrder
    closingDate?: SortOrder
    category?: SortOrder
    pdfUrl?: SortOrder
    pdfKey?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenderMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    reference?: SortOrder
    publishedDate?: SortOrder
    closingDate?: SortOrder
    category?: SortOrder
    pdfUrl?: SortOrder
    pdfKey?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenderMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    reference?: SortOrder
    publishedDate?: SortOrder
    closingDate?: SortOrder
    category?: SortOrder
    pdfUrl?: SortOrder
    pdfKey?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumStatusTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusType | EnumStatusTypeFieldRefInput<$PrismaModel>
    in?: $Enums.StatusType[] | ListEnumStatusTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusType[] | ListEnumStatusTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusTypeWithAggregatesFilter<$PrismaModel> | $Enums.StatusType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusTypeFilter<$PrismaModel>
    _max?: NestedEnumStatusTypeFilter<$PrismaModel>
  }

  export type StaffFormCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    formType?: SortOrder
    updatedDate?: SortOrder
    pdfUrl?: SortOrder
    pdfKey?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type StaffFormMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    formType?: SortOrder
    updatedDate?: SortOrder
    pdfUrl?: SortOrder
    pdfKey?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type StaffFormMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    formType?: SortOrder
    updatedDate?: SortOrder
    pdfUrl?: SortOrder
    pdfKey?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumGalleryCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.GalleryCategory | EnumGalleryCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.GalleryCategory[] | ListEnumGalleryCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.GalleryCategory[] | ListEnumGalleryCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumGalleryCategoryFilter<$PrismaModel> | $Enums.GalleryCategory
  }

  export type GalleryImageCountOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    category?: SortOrder
    imageKey?: SortOrder
    createdAt?: SortOrder
  }

  export type GalleryImageMaxOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    category?: SortOrder
    imageKey?: SortOrder
    createdAt?: SortOrder
  }

  export type GalleryImageMinOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    category?: SortOrder
    imageKey?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumGalleryCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GalleryCategory | EnumGalleryCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.GalleryCategory[] | ListEnumGalleryCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.GalleryCategory[] | ListEnumGalleryCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumGalleryCategoryWithAggregatesFilter<$PrismaModel> | $Enums.GalleryCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGalleryCategoryFilter<$PrismaModel>
    _max?: NestedEnumGalleryCategoryFilter<$PrismaModel>
  }

  export type GalleryVideoCountOrderByAggregateInput = {
    id?: SortOrder
    youtubeUrl?: SortOrder
    youtubeKey?: SortOrder
    category?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
  }

  export type GalleryVideoMaxOrderByAggregateInput = {
    id?: SortOrder
    youtubeUrl?: SortOrder
    youtubeKey?: SortOrder
    category?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
  }

  export type GalleryVideoMinOrderByAggregateInput = {
    id?: SortOrder
    youtubeUrl?: SortOrder
    youtubeKey?: SortOrder
    category?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumFacultyTypeFieldUpdateOperationsInput = {
    set?: $Enums.FacultyType
  }

  export type EnumDepartmentsFieldUpdateOperationsInput = {
    set?: $Enums.Departments
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumStatusTypeFieldUpdateOperationsInput = {
    set?: $Enums.StatusType
  }

  export type EnumGalleryCategoryFieldUpdateOperationsInput = {
    set?: $Enums.GalleryCategory
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumFacultyTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FacultyType | EnumFacultyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FacultyType[] | ListEnumFacultyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FacultyType[] | ListEnumFacultyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFacultyTypeFilter<$PrismaModel> | $Enums.FacultyType
  }

  export type NestedEnumDepartmentsFilter<$PrismaModel = never> = {
    equals?: $Enums.Departments | EnumDepartmentsFieldRefInput<$PrismaModel>
    in?: $Enums.Departments[] | ListEnumDepartmentsFieldRefInput<$PrismaModel>
    notIn?: $Enums.Departments[] | ListEnumDepartmentsFieldRefInput<$PrismaModel>
    not?: NestedEnumDepartmentsFilter<$PrismaModel> | $Enums.Departments
  }

  export type NestedEnumFacultyTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FacultyType | EnumFacultyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FacultyType[] | ListEnumFacultyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FacultyType[] | ListEnumFacultyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFacultyTypeWithAggregatesFilter<$PrismaModel> | $Enums.FacultyType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFacultyTypeFilter<$PrismaModel>
    _max?: NestedEnumFacultyTypeFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumDepartmentsWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Departments | EnumDepartmentsFieldRefInput<$PrismaModel>
    in?: $Enums.Departments[] | ListEnumDepartmentsFieldRefInput<$PrismaModel>
    notIn?: $Enums.Departments[] | ListEnumDepartmentsFieldRefInput<$PrismaModel>
    not?: NestedEnumDepartmentsWithAggregatesFilter<$PrismaModel> | $Enums.Departments
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDepartmentsFilter<$PrismaModel>
    _max?: NestedEnumDepartmentsFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumStatusTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusType | EnumStatusTypeFieldRefInput<$PrismaModel>
    in?: $Enums.StatusType[] | ListEnumStatusTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusType[] | ListEnumStatusTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusTypeFilter<$PrismaModel> | $Enums.StatusType
  }

  export type NestedEnumStatusTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusType | EnumStatusTypeFieldRefInput<$PrismaModel>
    in?: $Enums.StatusType[] | ListEnumStatusTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusType[] | ListEnumStatusTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusTypeWithAggregatesFilter<$PrismaModel> | $Enums.StatusType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusTypeFilter<$PrismaModel>
    _max?: NestedEnumStatusTypeFilter<$PrismaModel>
  }

  export type NestedEnumGalleryCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.GalleryCategory | EnumGalleryCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.GalleryCategory[] | ListEnumGalleryCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.GalleryCategory[] | ListEnumGalleryCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumGalleryCategoryFilter<$PrismaModel> | $Enums.GalleryCategory
  }

  export type NestedEnumGalleryCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GalleryCategory | EnumGalleryCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.GalleryCategory[] | ListEnumGalleryCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.GalleryCategory[] | ListEnumGalleryCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumGalleryCategoryWithAggregatesFilter<$PrismaModel> | $Enums.GalleryCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGalleryCategoryFilter<$PrismaModel>
    _max?: NestedEnumGalleryCategoryFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}