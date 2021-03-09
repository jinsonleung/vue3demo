<template>
  <el-form
    ref="registerForm"
    :model="registerUser"
    :rules="registerRules"
    status-icon
    label-width="100px"
    class="registerForm sign-up-form"
  >
    <el-form-item label="用户名" prop="name">
      <el-input
        v-model="registerUser.name"
        placeholder="Enter user name..."
      ></el-input>
    </el-form-item>
    <el-form-item label="邮箱" prop="email">
      <el-input
        v-model="registerUser.email"
        placeholder="Enter email..."
      ></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input
        v-model="registerUser.password"
        type="password"
        placeholder="Enter password..."
      ></el-input>
    </el-form-item>
    <el-form-item label="密码2" prop="password2">
      <el-input
        v-model="registerUser.password2"
        type="password"
        placeholder="Enter password2..."
      ></el-input>
    </el-form-item>

    <el-form-item label="选择身份">
      <el-select v-model="registerUser.role" placeholder="请选择身份">
        <el-option label="管理员" value="admin"></el-option>
        <el-option label="用户" value="user"></el-option>
        <el-option label="游客" value="visitor"></el-option>
      </el-select>
    </el-form-item>

    <el-form-item>
      <el-button
        type="primary"
        class="submit-btn"
        @click="handleRegister('registerForm')"
        >提交</el-button
      >
    </el-form-item>
    <!-- 找回密码 -->
    <div class="tiparea">
      <p>忘记密码？<a>立即找回</a></p>
    </div>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "RegisterForm",
  props: {
    registerUser: {
      type: Object,
      required: true
    },
    registerRules: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    // @ts-ignore
    const { proxy }: any = getCurrentInstance();
    //定义路由变量
    const router = useRouter();
    const handleRegister = (formName: any) => {
      console.log(proxy);
      proxy.$refs[formName].validate((valid: boolean) => {
        if (valid) {
          // /api=https://imissu.herokuapp.com/api
          const url = "/api/v1/auth/register";
          proxy.$axios.post(url, props.registerUser).then((res: any) => {
            //提示注册成功
            proxy.$alert({
              message: "注册成功",
              type: "success"
            });
            //路由跳转
            router.push("/");
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    };
    return {
      handleRegister
    };
  }
});
</script>
<style scoped></style>
