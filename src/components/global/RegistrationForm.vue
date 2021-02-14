<template>
        <form @submit.prevent="registrateUser" class="registration-form">
            <div class="registration-form__field">
                <label for="firstName" class="registration-form__label">Твое имя:</label>
                    <input 
                        type="text"
                        id="firstName"
                        name="firstName" 
                        v-model="userInfo.firstName" 
                        required
                        class="registration-form__firstName"
                        :class="{'registration-form__firstName_aproved':userInfo.firstName}"
                    />
            </div>
            <div class="registration-form__field">
                <label for="lastName" class="registration-form__label">Твоя фамилия:</label>
                    <input 
                        type="text" 
                        id="lastName"
                        name="lastName" 
                        v-model="userInfo.lastName"
                        class="registration-form__lastName"
                        :class="{'registration-form__lastName_aproved':userInfo.lastName}"
                    />
            </div>
            <div class="registration-form__field">
                <label for="mail" class="registration-form__label">Твоя почта:</label>
                    <input 
                        type="email"
                        id="mail"
                        name="mail" 
                        v-model="userInfo.email" 
                        required
                        class="registration-form__email"
                        :class="{'registration-form__email_aproved':userInfo.email}"
                    />
            </div>
            <div class="registration-form__field">
                <label for="phone" class="registration-form__label">Твой телефон:</label>
                    <input 
                        type="tel"
                        id="phone"
                        name="phone" 
                        v-model="userInfo.phoneNumber"
                        class="registration-form__phone"
                        :class="{'registration-form__phone_aproved':userInfo.phoneNumber}"
                        required
                    />
            </div>
            <button
                class="registration-form__button"    
            >Подтвердить</button>
        </form>
</template>
<script>
export default {
    name: 'RegistrationForm',
    data(){
        return{
            userInfo:{
                firstName:'',
                lastName:'',
                email:'',
                phoneNumber:'',
            },
        };
    },
    methods:{
        registrateUser(){
            return true;
        }
    }
};
</script>
<style lang="sass" scoped src="@/media/sass/components/global/RegistrationForm.sass"></style>
