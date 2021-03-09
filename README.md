# vue3demo
vue3 demo by Jinson

### 1. vue3 获取组件实例时报错

>     // const { proxy } = getCurrentInstance();
>     //const instance = getCurrentInstance();
>     const submitForm = (formName: any) => {
>       //报错....
>       // console.log(formName);
>       // if (instance) {
>       //   instance.proxy.$refs[formName].validate((valid: boolean) => {
>       //     if (valid) {
>       //       alert("submit!");
>       //     } else {
>       //       console.log("error submit!!");
>       //       return false;
>       //     }
>       //   });
>       // }
>     };

