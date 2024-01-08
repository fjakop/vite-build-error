export type UserTask = {
  assignee: string | null;
  createTime: string;
  description: string;
  id: string;
  processDefinitionKey?: string;
  taskDefinitionKey: string;
};
