<template>
  <form id="edit-profile"
        @submit.prevent="saveProfile">
    <Pane>
      <SectionHeader>{{ $t('profile.editProfile.title') }}</SectionHeader>
      <Actions>
        <Button type="submit"
                variant="save">
          {{ $t('profile.editProfile.actions.save') }}
        </Button>
        <Button @click="goToProfile()">
          {{ $t('profile.editProfile.actions.cancel') }}
        </Button>
      </Actions>
    </Pane>

    <Pane>
      <FormGroup>
        <FormField>
          <Label>{{ $t('profile.editProfile.labels.firstName') }}</Label>
          <input name="firstName"
                 v-model.trim="profile.firstName"
                 v-validate="'required|alpha_spaces'" />
          <ErrorMessage v-show="errors.has('firstName')">
            {{ errors.first('firstName') }}
          </ErrorMessage>
        </FormField>
        <FormField>
          <Label>{{ $t('profile.editProfile.labels.lastName') }}</Label>
          <input name="lastName"
                 v-model.trim="profile.lastName"
                 v-validate="'required|alpha_spaces'" />
          <ErrorMessage v-show="errors.has('lastName')">
            {{ errors.first('lastName') }}
          </ErrorMessage>
        </FormField>
        <FormField>
          <Label>{{ $t('profile.editProfile.labels.language') }}</Label>
          <select v-model.number="profile.languageId">
            <option value="0" disabled>
              {{ $t('profile.editProfile.placeholders.language') }}
            </option>
            <option v-for="language in languages"
                    :key="language.id"
                    :value="language.id">
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
                 v-model.number="profile.averageNumberOfHoursPerDay" />
          <ErrorMessage v-show="errors.has('averageNumberOfHoursPerDay')">
            {{ errors.first('averageNumberOfHoursPerDay') }}
          </ErrorMessage>
        </FormField>
      </FormGroup>
    </Pane>
  </form>
</template>

<script>
  import {EditProfileStoreKeys} from "@/app/modules/profile/modules/edit-profile/edit-profile-store-keys";

  export default {
    name: 'EditProfile',
    components: {},
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
      saveProfile: function() {
        this.$validator.validate().then(isValid => {
          if (isValid) {
            this.$store.dispatch(EditProfileStoreKeys.Actions.SaveProfile, this.profile)
              .then(() => this.$router.replace('/profile/details'));
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