<template>
        <form @submit.prevent="registrateUser" class="registration-form">
            <div class="registration-form__field">
                <label for="firstName" class="registration-form__label">Твое имя:</label>
                    <input 
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="Крутой"
                        @change="validateForm"
                        required
                        class="registration-form__firstName"
                    />
            </div>
            <div class="registration-form__field">
                <label for="lastName" class="registration-form__label">Твоя фамилия:</label>
                    <input 
                        type="text" 
                        id="lastName"
                        name="lastName"
                        placeholder="Серфер"
                        @change="validateForm"
                        class="registration-form__lastName"
                    />
            </div>
            <div class="registration-form__field">
                <label for="mail" class="registration-form__label">Твоя почта:</label>
                    <input 
                        type="email"
                        id="mail"
                        name="email"
                        placeholder="user@mail.com"
                        @change="validateForm"
                        required
                        class="registration-form__email"
                    />
            </div>
            <div class="registration-form__field">
                <label for="phone" class="registration-form__label">Твой телефон:</label>
                    <input 
                        type="tel"
                        id="phone"
                        name="phoneNumber"
                        placeholder="+7(___)___-__-__"
                        @change="validateForm"
                        class="registration-form__phone"
                        required
                    />
            </div>
            <button
                class="registration-form__button"    
            >Подтвердить</button>
        </form>
</template>
<script>
import {formValidation} from '@/helpers/functions/formValidation.js';
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
        validateForm(e){
            if(formValidation(e)) this.userInfo[`${e.target.name}`] = e.target.value;
        },
        registrateUser(){
            return true;
        }
    }
};
</script>
<style lang="sass" scoped src="@/media/sass/components/global/RegistrationForm.sass"></style>
