//定义todo接口，目的是约束state数据类型
export interface Todo {
  id: number;
  title: string;
  isCompleted: boolean;
}
