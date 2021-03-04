import { ref } from "vue";

//登录界面输入接口，用于约束类型
interface User {
  email: string;
  password: string;
}

export const loginUser = ref<User>({
  email: "",
  password: ""
});

//规则接口，用于约束类型
interface Rules {
  email: {
    type: string;
    required: boolean;
    message: string;
    triger: string;
  }[];
  password: (
    | {
        required: boolean;
        message: string;
        triger: string;
        min?: undefined;
        max?: undefined;
      }
    | {
        min: number;
        max: number;
        message: string;
        required?: undefined;
        triger?: undefined;
      }
  )[];
}

export const rules = ref<Rules>({
  email: [
    {
      type: "email",
      required: true,
      message: "please enter email...",
      triger: "blur"
    }
  ],
  password: [
    {
      required: true,
      message: "please enter password",
      triger: "blu"
    },
    {
      min: 6,
      max: 30,
      message:
        "your password is more than 6 characters and less than 30 characters"
    }
  ]
});
