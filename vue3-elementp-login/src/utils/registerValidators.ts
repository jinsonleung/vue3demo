import { ref } from "vue";

//注册用户接口
interface RegisterUser {
  userName: string;
  email: string;
  password: string;
  password2: string;
}

//注册用户响应式对象
export const registerUser = ref<RegisterUser>({
  userName: "",
  email: "",
  password: "",
  password2: ""
});

interface RegisterRules {
  userName: (
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
  password2: (
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

//两次密码输入规则校验
const validatePassword2 = (rules: RegisterRules, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("请输入密码"));
  } else if (registerUser.value.password !== value) {
    callback(new Error("两次密码不一致"));
  } else {
    callback();
  }
};

export const registerRules = ref<RegisterRules>({
  userName: [
    {
      required: true,
      message: "please enter user name...",
      triger: "blur"
    },
    {
      min: 2,
      max: 16,
      message: "user name is more than 2 characters and less than 16 characters"
    }
  ],
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
      triger: "blur"
    },
    {
      min: 6,
      max: 30,
      message:
        "your password is more than 6 characters and less than 30 characters"
    }
  ],
  password2: [
    {
      required: true,
      message: "please enter password2",
      triger: "blur"
    },
    {
      min: 6,
      max: 30,
      message:
        "your password2 is more than 6 characters and less than 30 characters"
    }
    //{ validator: validatePassword2, trigger: "blur" }
  ]
});
