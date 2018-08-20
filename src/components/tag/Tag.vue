<template>
    <div v-if="attached && closable" class="tags has-addons">
        <span
            class="tag"
            :style="{
                fontSize: tagStyles.fontSize,
                fontFamily: tagStyles.fontFamily,
                height: tagStyles.height
            }"
            :class="[type, size, { 'is-rounded': rounded }]">
            <span :class="{ 'has-ellipsis': ellipsis }">
                <slot/>
            </span>
        </span>
        <a
            class="tag is-delete"
            role="button"
            :tabindex="tabstop ? 0 : false"
            :disabled="disabled"
            :class="[size, { 'is-rounded': rounded }]"
            :style="{
                fontSize: tagStyles.fontSize,
                fontFamily: tagStyles.fontFamily,
                height: tagStyles.height
            }"
            @click="close()"
            @keyup.delete.prevent="close()"
        />
    </div>
    <span
        v-else
        class="tag"
        :style="{
            fontSize: tagStyles.fontSize,
            fontFamily: tagStyles.fontFamily,
            height: tagStyles.height
        }"
        :class="[type, size, { 'is-rounded': rounded }]">
        <span :class="{ 'has-ellipsis': ellipsis }">
            <slot/>
        </span>

        <a
            v-if="closable"
            role="button"
            class="delete is-small"
            :disabled="disabled"
            :tabindex="tabstop ? 0 : false"
            :style="{
                fontSize: tagStyles.fontSize,
                fontFamily: tagStyles.fontFamily,
                height: tagStyles.height
            }"
            @click="close()"
            @keyup.delete.prevent="close()"
        />
    </span>
</template>

<script>
    export default {
        name: 'BTag',
        props: {
            attached: Boolean,
            closable: Boolean,
            type: String,
            size: String,
            rounded: Boolean,
            disabled: Boolean,
            ellipsis: Boolean,
            tabstop: {
                type: Boolean,
                default: true
            },
            tagStyles: Object
        },
        methods: {
            /**
             * Emit close event when delete button is clicked
             * or delete key is pressed.
             */
            close() {
                if (this.disabled) return

                this.$emit('close')
            }
        }
    }
</script>
