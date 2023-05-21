import { getJestProjects } from '@nx/jest';

export default {
  projects: getJestProjects(),
  autoMock: false,
  setupFiles: ['<rootDir>/__mocks__/jest.ts'],
};
