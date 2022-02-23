import { GitOrganization } from 'src/models/GitOrganization';
import { CreateGitOrganizationArgs } from '../dto/args/CreateGitOrganizationArgs';
import { GitRepo } from '../dto/objects/GitRepo';
import { GitUser } from '../dto/objects/GitUser';
import { ITokenExtractor } from './ITokenExtractor';
import { CreateRepoArgsType } from './types/CreateRepoArgsType';

export interface IGitClient {
  createRepo(args: CreateRepoArgsType): Promise<GitRepo>;
  getUserRepos(token: string): Promise<GitRepo[]>;
  isRepoExist(token: string, name: string): Promise<boolean>;
  getUser(token: string): Promise<GitUser>;
  getGitOrganization(workspaceId: string): Promise<GitOrganization>;
  getGitOrganizations(workspaceId: string): Promise<GitOrganization[]>;
  createGitOrganization(
    args: CreateGitOrganizationArgs
  ): Promise<GitOrganization>;
  getGithubAppInstallationUrl(workspaceId: string): Promise<string>;
  deleteGitOrganization(workspaceId: string): Promise<boolean>;

  tokenExtractor: ITokenExtractor;
}
