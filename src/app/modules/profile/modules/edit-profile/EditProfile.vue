<template>
  <form id="edit-profile"
        @submit="saveProfile">
    <Pane>
      <SectionHeader>{{ $t('profile.editProfile.title') }}</SectionHeader>
      <Actions>
        <Button type="submit"
                variant="save">
          {{ $t('profile.editProfile.actions.save') }}
        </Button>
        <Button variant="normal"
                @click="goToProfile()">
          {{ $t('profile.editProfile.actions.cancel') }}
        </Button>
      </Actions>
    </Pane>

    <Pane>
      <FormGroup>
        <FormField>
          <Label>{{ $t('profile.editProfile.labels.firstName') }}</Label>
          <input name="firstName"
                 v-model="profile.firstName"
                 v-validate="'required|alpha_spaces'" />
          <ErrorMessage v-show="errors.has('firstName')">
            {{ errors.first('firstName') }}
          </ErrorMessage>
        </FormField>
        <FormField>
          <Label>{{ $t('profile.editProfile.labels.lastName') }}</Label>
          <input name="lastName"
                 v-model="profile.lastName"
                 v-validate="'required|alpha_spaces'" />
          <ErrorMessage v-show="errors.has('lastName')">
            {{ errors.first('lastName') }}
          </ErrorMessage>
        </FormField>
        <FormField>
          <Label>{{ $t('profile.editProfile.labels.language') }}</Label>
          <select v-model="profile.languageId">
            <option value="0" disabled>
              {{ $t('profile.editProfile.placeholders.language') }}
            </option>
            <option v-for="language in languages"
                    v-bind:key="language.id"
                    v-bind:value="language.id">
              {{ language.name }}
            </option>
          </select>
        </FormField>
        <FormField>
          <Label>{{ $t('profile.editProfile.labels.averageNumberOfHoursToGamePerDay') }}</Label>
          <input name="averageNumberOfHoursPerDay"
                 type="number"
                 min="0"
                 v-validate="'required|min_value:0'"
                 v-model="profile.averageNumberOfHoursPerDay" />
          <ErrorMessage v-show="errors.has('averageNumberOfHoursPerDay')">
            {{ errors.first('averageNumberOfHoursPerDay') }}
          </ErrorMessage>
        </FormField>
      </FormGroup>
    </Pane>
  </form>
</template>

<script>
  import Pane from "@/app/modules/ui/components/Pane";
  import SectionHeader from "@/app/modules/ui/components/SectionHeader";
  import Button from "@/app/modules/ui/components/Button";
  import Actions from "@/app/modules/ui/components/Actions";
  import FormField from "@/app/modules/ui/components/FormField";
  import Label from "@/app/modules/ui/components/Label";
  import FormGroup from "@/app/modules/ui/components/FormGroup";
  import {EditProfileStoreKeys} from "@/app/modules/profile/modules/edit-profile/edit-profile-store-keys";
  import ErrorMessage from "@/app/modules/ui/components/ErrorMessage";
  export default {
    name: 'EditProfile',
    components: {ErrorMessage, FormGroup, Label, FormField, Actions, Button, SectionHeader, Pane},
    data: function() {
      return {
        profile: {
          ...this.$store.state.profile
        }
      };
    },
    computed: {
      languages:function() {
        return this.$store.state.languages;
      }
    },
    methods: {
      saveProfile: function(event) {
        event.preventDefault();

        this.$validator.validate().then(isValid => {
          if (isValid) {
            this.$store.dispatch(EditProfileStoreKeys.Actions.SaveProfile, {
              ...this.profile,
              averageNumberOfHoursPerDay: Number(this.profile.averageNumberOfHoursPerDay),
              languageId: Number(this.profile.languageId)
            });
          }
        });
      },

      goToProfile: function() {
        this.$router.replace('/profile/details');
      }
    }
  }
</script>

<style lang="scss" scoped>
  #edit-profile {

  }
</style>