<template>
  <form id="edit-profile"
        @submit="saveProfile">
    <Pane>
      <SectionHeader>Edit Your Profile</SectionHeader>
      <Actions>
        <Button type="submit"
                variant="save">
          Save
        </Button>
        <Button variant="normal"
                @click="goToProfile()">
          Cancel
        </Button>
      </Actions>
    </Pane>

    <Pane>
      <FormGroup>
        <FormField>
          <Label>First Name</Label>
          <input v-model="profile.firstName" />
          <ErrorMessage v-if="errors.firstName">
            {{ errors.firstName }}
          </ErrorMessage>
        </FormField>
        <FormField>
          <Label>Last Name</Label>
          <input v-model="profile.lastName" />
          <ErrorMessage v-if="errors.lastName">
            {{ errors.lastName }}
          </ErrorMessage>
        </FormField>
        <FormField>
          <Label>Language</Label>
          <select v-model="profile.languageId">
            <option value="0" disabled>Choose a language...</option>
            <option v-for="language in languages"
                    v-bind:key="language.id"
                    v-bind:value="language.id">
              {{ language.name }}
            </option>
          </select>
        </FormField>
        <FormField>
          <Label>Average Number of Hours to Game Per Day</Label>
          <input type="number"
                 min="0"
                 v-model="profile.averageNumberOfHoursPerDay" />
          <ErrorMessage v-if="errors.averageNumberOfHoursPerDay">
            {{ errors.averageNumberOfHoursPerDay }}
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
        },
        errors: {}
      };
    },
    computed: {
      languages:function() {
        return this.$store.state.languages;
      }
    },
    methods: {
      isValid: function() {
        this.errors = {};

        if (!this.profile.firstName) {
          this.errors.firstName = 'Your first name is required';
        }

        if (!this.profile.lastName) {
          this.errors.lastName = 'Your last name is required';
        }

        if (!this.profile.averageNumberOfHoursPerDay) {
          this.errors.averageNumberOfHoursPerDay = 'This is required';
        }

        return Object.keys(this.errors).length === 0;
      },

      saveProfile: function(event) {
        event.preventDefault();

        if (this.isValid()) {
          this.$store.dispatch(EditProfileStoreKeys.Actions.SaveProfile, {
            ...this.profile,
            averageNumberOfHoursPerDay: Number(this.profile.averageNumberOfHoursPerDay),
            languageId: Number(this.profile.languageId)
          });
        }
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