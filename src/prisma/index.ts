// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  admin: (where?: AdminWhereInput) => Promise<boolean>;
  event: (where?: EventWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  admin: (where: AdminWhereUniqueInput) => AdminNullablePromise;
  admins: (args?: {
    where?: AdminWhereInput;
    orderBy?: AdminOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Admin>;
  adminsConnection: (args?: {
    where?: AdminWhereInput;
    orderBy?: AdminOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => AdminConnectionPromise;
  event: (where: EventWhereUniqueInput) => EventNullablePromise;
  events: (args?: {
    where?: EventWhereInput;
    orderBy?: EventOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Event>;
  eventsConnection: (args?: {
    where?: EventWhereInput;
    orderBy?: EventOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => EventConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserNullablePromise;
  users: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<User>;
  usersConnection: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createAdmin: (data: AdminCreateInput) => AdminPromise;
  updateAdmin: (args: {
    data: AdminUpdateInput;
    where: AdminWhereUniqueInput;
  }) => AdminPromise;
  upsertAdmin: (args: {
    where: AdminWhereUniqueInput;
    create: AdminCreateInput;
    update: AdminUpdateInput;
  }) => AdminPromise;
  deleteAdmin: (where: AdminWhereUniqueInput) => AdminPromise;
  deleteManyAdmins: (where?: AdminWhereInput) => BatchPayloadPromise;
  createEvent: (data: EventCreateInput) => EventPromise;
  updateEvent: (args: {
    data: EventUpdateInput;
    where: EventWhereUniqueInput;
  }) => EventPromise;
  updateManyEvents: (args: {
    data: EventUpdateManyMutationInput;
    where?: EventWhereInput;
  }) => BatchPayloadPromise;
  upsertEvent: (args: {
    where: EventWhereUniqueInput;
    create: EventCreateInput;
    update: EventUpdateInput;
  }) => EventPromise;
  deleteEvent: (where: EventWhereUniqueInput) => EventPromise;
  deleteManyEvents: (where?: EventWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (args: {
    data: UserUpdateInput;
    where: UserWhereUniqueInput;
  }) => UserPromise;
  updateManyUsers: (args: {
    data: UserUpdateManyMutationInput;
    where?: UserWhereInput;
  }) => BatchPayloadPromise;
  upsertUser: (args: {
    where: UserWhereUniqueInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  }) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  admin: (
    where?: AdminSubscriptionWhereInput
  ) => AdminSubscriptionPayloadSubscription;
  event: (
    where?: EventSubscriptionWhereInput
  ) => EventSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type AdminOrderByInput = "id_ASC" | "id_DESC";

export type EventOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "description_ASC"
  | "description_DESC"
  | "startAt_ASC"
  | "startAt_DESC"
  | "endAt_ASC"
  | "endAt_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type UserRole = "Admin";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "auth0Id_ASC"
  | "auth0Id_DESC"
  | "email_ASC"
  | "email_DESC"
  | "firstName_ASC"
  | "firstName_DESC"
  | "lastName_ASC"
  | "lastName_DESC"
  | "role_ASC"
  | "role_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export interface EventCreateInput {
  id?: Maybe<ID_Input>;
  name: String;
  description?: Maybe<String>;
  startAt?: Maybe<DateTimeInput>;
  endAt?: Maybe<DateTimeInput>;
}

export type AdminWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface EventWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  description?: Maybe<String>;
  description_not?: Maybe<String>;
  description_in?: Maybe<String[] | String>;
  description_not_in?: Maybe<String[] | String>;
  description_lt?: Maybe<String>;
  description_lte?: Maybe<String>;
  description_gt?: Maybe<String>;
  description_gte?: Maybe<String>;
  description_contains?: Maybe<String>;
  description_not_contains?: Maybe<String>;
  description_starts_with?: Maybe<String>;
  description_not_starts_with?: Maybe<String>;
  description_ends_with?: Maybe<String>;
  description_not_ends_with?: Maybe<String>;
  startAt?: Maybe<DateTimeInput>;
  startAt_not?: Maybe<DateTimeInput>;
  startAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  startAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  startAt_lt?: Maybe<DateTimeInput>;
  startAt_lte?: Maybe<DateTimeInput>;
  startAt_gt?: Maybe<DateTimeInput>;
  startAt_gte?: Maybe<DateTimeInput>;
  endAt?: Maybe<DateTimeInput>;
  endAt_not?: Maybe<DateTimeInput>;
  endAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  endAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  endAt_lt?: Maybe<DateTimeInput>;
  endAt_lte?: Maybe<DateTimeInput>;
  endAt_gt?: Maybe<DateTimeInput>;
  endAt_gte?: Maybe<DateTimeInput>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  updatedAt?: Maybe<DateTimeInput>;
  updatedAt_not?: Maybe<DateTimeInput>;
  updatedAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_lt?: Maybe<DateTimeInput>;
  updatedAt_lte?: Maybe<DateTimeInput>;
  updatedAt_gt?: Maybe<DateTimeInput>;
  updatedAt_gte?: Maybe<DateTimeInput>;
  AND?: Maybe<EventWhereInput[] | EventWhereInput>;
  OR?: Maybe<EventWhereInput[] | EventWhereInput>;
  NOT?: Maybe<EventWhereInput[] | EventWhereInput>;
}

export interface UserWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  auth0Id?: Maybe<String>;
  auth0Id_not?: Maybe<String>;
  auth0Id_in?: Maybe<String[] | String>;
  auth0Id_not_in?: Maybe<String[] | String>;
  auth0Id_lt?: Maybe<String>;
  auth0Id_lte?: Maybe<String>;
  auth0Id_gt?: Maybe<String>;
  auth0Id_gte?: Maybe<String>;
  auth0Id_contains?: Maybe<String>;
  auth0Id_not_contains?: Maybe<String>;
  auth0Id_starts_with?: Maybe<String>;
  auth0Id_not_starts_with?: Maybe<String>;
  auth0Id_ends_with?: Maybe<String>;
  auth0Id_not_ends_with?: Maybe<String>;
  email?: Maybe<String>;
  email_not?: Maybe<String>;
  email_in?: Maybe<String[] | String>;
  email_not_in?: Maybe<String[] | String>;
  email_lt?: Maybe<String>;
  email_lte?: Maybe<String>;
  email_gt?: Maybe<String>;
  email_gte?: Maybe<String>;
  email_contains?: Maybe<String>;
  email_not_contains?: Maybe<String>;
  email_starts_with?: Maybe<String>;
  email_not_starts_with?: Maybe<String>;
  email_ends_with?: Maybe<String>;
  email_not_ends_with?: Maybe<String>;
  firstName?: Maybe<String>;
  firstName_not?: Maybe<String>;
  firstName_in?: Maybe<String[] | String>;
  firstName_not_in?: Maybe<String[] | String>;
  firstName_lt?: Maybe<String>;
  firstName_lte?: Maybe<String>;
  firstName_gt?: Maybe<String>;
  firstName_gte?: Maybe<String>;
  firstName_contains?: Maybe<String>;
  firstName_not_contains?: Maybe<String>;
  firstName_starts_with?: Maybe<String>;
  firstName_not_starts_with?: Maybe<String>;
  firstName_ends_with?: Maybe<String>;
  firstName_not_ends_with?: Maybe<String>;
  lastName?: Maybe<String>;
  lastName_not?: Maybe<String>;
  lastName_in?: Maybe<String[] | String>;
  lastName_not_in?: Maybe<String[] | String>;
  lastName_lt?: Maybe<String>;
  lastName_lte?: Maybe<String>;
  lastName_gt?: Maybe<String>;
  lastName_gte?: Maybe<String>;
  lastName_contains?: Maybe<String>;
  lastName_not_contains?: Maybe<String>;
  lastName_starts_with?: Maybe<String>;
  lastName_not_starts_with?: Maybe<String>;
  lastName_ends_with?: Maybe<String>;
  lastName_not_ends_with?: Maybe<String>;
  role?: Maybe<UserRole>;
  role_not?: Maybe<UserRole>;
  role_in?: Maybe<UserRole[] | UserRole>;
  role_not_in?: Maybe<UserRole[] | UserRole>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  updatedAt?: Maybe<DateTimeInput>;
  updatedAt_not?: Maybe<DateTimeInput>;
  updatedAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_lt?: Maybe<DateTimeInput>;
  updatedAt_lte?: Maybe<DateTimeInput>;
  updatedAt_gt?: Maybe<DateTimeInput>;
  updatedAt_gte?: Maybe<DateTimeInput>;
  AND?: Maybe<UserWhereInput[] | UserWhereInput>;
  OR?: Maybe<UserWhereInput[] | UserWhereInput>;
  NOT?: Maybe<UserWhereInput[] | UserWhereInput>;
}

export interface AdminSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<AdminWhereInput>;
  AND?: Maybe<AdminSubscriptionWhereInput[] | AdminSubscriptionWhereInput>;
  OR?: Maybe<AdminSubscriptionWhereInput[] | AdminSubscriptionWhereInput>;
  NOT?: Maybe<AdminSubscriptionWhereInput[] | AdminSubscriptionWhereInput>;
}

export interface UserUpdateManyMutationInput {
  auth0Id?: Maybe<String>;
  email?: Maybe<String>;
  firstName?: Maybe<String>;
  lastName?: Maybe<String>;
  role?: Maybe<UserRole>;
}

export interface UserUpdateOneRequiredInput {
  create?: Maybe<UserCreateInput>;
  update?: Maybe<UserUpdateDataInput>;
  upsert?: Maybe<UserUpsertNestedInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface EventUpdateManyMutationInput {
  name?: Maybe<String>;
  description?: Maybe<String>;
  startAt?: Maybe<DateTimeInput>;
  endAt?: Maybe<DateTimeInput>;
}

export interface AdminUpdateInput {
  user?: Maybe<UserUpdateOneRequiredInput>;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<UserWhereInput>;
  AND?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  OR?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  NOT?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
}

export interface UserCreateInput {
  id?: Maybe<ID_Input>;
  auth0Id: String;
  email: String;
  firstName: String;
  lastName: String;
  role?: Maybe<UserRole>;
}

export type EventWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface AdminCreateInput {
  id?: Maybe<ID_Input>;
  user: UserCreateOneInput;
}

export interface UserCreateOneInput {
  create?: Maybe<UserCreateInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface EventSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<EventWhereInput>;
  AND?: Maybe<EventSubscriptionWhereInput[] | EventSubscriptionWhereInput>;
  OR?: Maybe<EventSubscriptionWhereInput[] | EventSubscriptionWhereInput>;
  NOT?: Maybe<EventSubscriptionWhereInput[] | EventSubscriptionWhereInput>;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
  auth0Id?: Maybe<String>;
  email?: Maybe<String>;
}>;

export interface UserUpdateDataInput {
  auth0Id?: Maybe<String>;
  email?: Maybe<String>;
  firstName?: Maybe<String>;
  lastName?: Maybe<String>;
  role?: Maybe<UserRole>;
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput;
  create: UserCreateInput;
}

export interface EventUpdateInput {
  name?: Maybe<String>;
  description?: Maybe<String>;
  startAt?: Maybe<DateTimeInput>;
  endAt?: Maybe<DateTimeInput>;
}

export interface UserUpdateInput {
  auth0Id?: Maybe<String>;
  email?: Maybe<String>;
  firstName?: Maybe<String>;
  lastName?: Maybe<String>;
  role?: Maybe<UserRole>;
}

export interface AdminWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  user?: Maybe<UserWhereInput>;
  AND?: Maybe<AdminWhereInput[] | AdminWhereInput>;
  OR?: Maybe<AdminWhereInput[] | AdminWhereInput>;
  NOT?: Maybe<AdminWhereInput[] | AdminWhereInput>;
}

export interface NodeNode {
  id: ID_Output;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface UserPreviousValues {
  id: ID_Output;
  auth0Id: String;
  email: String;
  firstName: String;
  lastName: String;
  role: UserRole;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  auth0Id: () => Promise<String>;
  email: () => Promise<String>;
  firstName: () => Promise<String>;
  lastName: () => Promise<String>;
  role: () => Promise<UserRole>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  auth0Id: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  firstName: () => Promise<AsyncIterator<String>>;
  lastName: () => Promise<AsyncIterator<String>>;
  role: () => Promise<AsyncIterator<UserRole>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface AdminConnection {
  pageInfo: PageInfo;
  edges: AdminEdge[];
}

export interface AdminConnectionPromise
  extends Promise<AdminConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<AdminEdge>>() => T;
  aggregate: <T = AggregateAdminPromise>() => T;
}

export interface AdminConnectionSubscription
  extends Promise<AsyncIterator<AdminConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<AdminEdgeSubscription>>>() => T;
  aggregate: <T = AggregateAdminSubscription>() => T;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface EventEdge {
  node: Event;
  cursor: String;
}

export interface EventEdgePromise extends Promise<EventEdge>, Fragmentable {
  node: <T = EventPromise>() => T;
  cursor: () => Promise<String>;
}

export interface EventEdgeSubscription
  extends Promise<AsyncIterator<EventEdge>>,
    Fragmentable {
  node: <T = EventSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateEvent {
  count: Int;
}

export interface AggregateEventPromise
  extends Promise<AggregateEvent>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateEventSubscription
  extends Promise<AsyncIterator<AggregateEvent>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface User {
  id: ID_Output;
  auth0Id: String;
  email: String;
  firstName: String;
  lastName: String;
  role: UserRole;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  auth0Id: () => Promise<String>;
  email: () => Promise<String>;
  firstName: () => Promise<String>;
  lastName: () => Promise<String>;
  role: () => Promise<UserRole>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  auth0Id: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  firstName: () => Promise<AsyncIterator<String>>;
  lastName: () => Promise<AsyncIterator<String>>;
  role: () => Promise<AsyncIterator<UserRole>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface UserNullablePromise
  extends Promise<User | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  auth0Id: () => Promise<String>;
  email: () => Promise<String>;
  firstName: () => Promise<String>;
  lastName: () => Promise<String>;
  role: () => Promise<UserRole>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface EventConnection {
  pageInfo: PageInfo;
  edges: EventEdge[];
}

export interface EventConnectionPromise
  extends Promise<EventConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<EventEdge>>() => T;
  aggregate: <T = AggregateEventPromise>() => T;
}

export interface EventConnectionSubscription
  extends Promise<AsyncIterator<EventConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<EventEdgeSubscription>>>() => T;
  aggregate: <T = AggregateEventSubscription>() => T;
}

export interface Event {
  id: ID_Output;
  name: String;
  description?: String;
  startAt?: DateTimeOutput;
  endAt?: DateTimeOutput;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
}

export interface EventPromise extends Promise<Event>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  description: () => Promise<String>;
  startAt: () => Promise<DateTimeOutput>;
  endAt: () => Promise<DateTimeOutput>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface EventSubscription
  extends Promise<AsyncIterator<Event>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
  startAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  endAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface EventNullablePromise
  extends Promise<Event | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  description: () => Promise<String>;
  startAt: () => Promise<DateTimeOutput>;
  endAt: () => Promise<DateTimeOutput>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface AdminPreviousValues {
  id: ID_Output;
}

export interface AdminPreviousValuesPromise
  extends Promise<AdminPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
}

export interface AdminPreviousValuesSubscription
  extends Promise<AsyncIterator<AdminPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
}

export interface AdminSubscriptionPayload {
  mutation: MutationType;
  node: Admin;
  updatedFields: String[];
  previousValues: AdminPreviousValues;
}

export interface AdminSubscriptionPayloadPromise
  extends Promise<AdminSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = AdminPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = AdminPreviousValuesPromise>() => T;
}

export interface AdminSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<AdminSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = AdminSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = AdminPreviousValuesSubscription>() => T;
}

export interface EventSubscriptionPayload {
  mutation: MutationType;
  node: Event;
  updatedFields: String[];
  previousValues: EventPreviousValues;
}

export interface EventSubscriptionPayloadPromise
  extends Promise<EventSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = EventPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = EventPreviousValuesPromise>() => T;
}

export interface EventSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<EventSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = EventSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = EventPreviousValuesSubscription>() => T;
}

export interface AggregateAdmin {
  count: Int;
}

export interface AggregateAdminPromise
  extends Promise<AggregateAdmin>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateAdminSubscription
  extends Promise<AsyncIterator<AggregateAdmin>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface AdminEdge {
  node: Admin;
  cursor: String;
}

export interface AdminEdgePromise extends Promise<AdminEdge>, Fragmentable {
  node: <T = AdminPromise>() => T;
  cursor: () => Promise<String>;
}

export interface AdminEdgeSubscription
  extends Promise<AsyncIterator<AdminEdge>>,
    Fragmentable {
  node: <T = AdminSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface EventPreviousValues {
  id: ID_Output;
  name: String;
  description?: String;
  startAt?: DateTimeOutput;
  endAt?: DateTimeOutput;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
}

export interface EventPreviousValuesPromise
  extends Promise<EventPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  description: () => Promise<String>;
  startAt: () => Promise<DateTimeOutput>;
  endAt: () => Promise<DateTimeOutput>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface EventPreviousValuesSubscription
  extends Promise<AsyncIterator<EventPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
  startAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  endAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface Admin {
  id: ID_Output;
}

export interface AdminPromise extends Promise<Admin>, Fragmentable {
  id: () => Promise<ID_Output>;
  user: <T = UserPromise>() => T;
}

export interface AdminSubscription
  extends Promise<AsyncIterator<Admin>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  user: <T = UserSubscription>() => T;
}

export interface AdminNullablePromise
  extends Promise<Admin | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  user: <T = UserPromise>() => T;
}

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

export type Long = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "UserRole",
    embedded: false
  },
  {
    name: "Admin",
    embedded: false
  },
  {
    name: "Event",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const Prisma = makePrismaClientClass<ClientConstructor<Prisma>>({
  typeDefs,
  models,
  endpoint: `http://localhost:3306`
});
export const prisma = new Prisma();
