<template>
  <div class="admin-login">
    <Card style="width:300px" class='admin-login-card'>
        <p slot="title">
            <Icon type="person" size='16'></Icon>
            登录
        </p>
        <Form ref="formInline" :model="formInline" :rules="ruleInline" >
          <FormItem prop="user">
              <Input type="text" v-model="formInline.user" placeholder="Username"  autocomplete='off'>
                  <Icon type="ios-person-outline" slot="prepend"></Icon>
              </Input>
          </FormItem>
          <FormItem prop="password">
              <Input type="password" v-model="formInline.password" placeholder="Password"  autocomplete='off'>
                  <Icon type="ios-locked-outline" slot="prepend"></Icon>
              </Input>
          </FormItem>
          <FormItem prop="verify">
              <Input type="text" v-model="formInline.verify" placeholder="验证码"  autocomplete='off'>
                <Icon type="social-codepen-outline"  slot="prepend"></Icon>
              </Input>
          </FormItem>
          <FormItem>
              <Button type="primary" @click="handleSubmit('formInline')">登录</Button>
          </FormItem>
      </Form>
    </Card>
     
  </div>
</template>

<script>
    export default {
        name: 'admin-login',
        data () {
            return {
                formInline: {
                    user: '',
                    password: '',
                    verify: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: '请填写用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请填写密码', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
                    ],
                    verify: [
                      { required: true, message: '请填写验证码', trigger: 'blur' },
                      { type: 'string', min: 4, message: '验证码长度不能小于4位', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('提交成功!')
                        setTimeout(() => {
                            this.$router.replace('/home')
                        }, 1000)
                    } else {
                        this.$Message.error('表单验证失败!')
                    }
                })
            }
        }
    }
</script>

<style lang='less'>
.admin-login{
  width: 100%;
  background: #4699f2;
  .admin-login-card{
    position: absolute;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
  }
}
</style>
