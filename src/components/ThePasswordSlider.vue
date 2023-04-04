<template>
<div
ref="slider"
id="slider"></div>
</template>

<script setup>
import {onMounted, ref,defineEmits} from 'vue';
import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
const emit = defineEmits(['updateProperty'])
const slider = ref(null);
let currentValue = ref('');

onMounted(() =>{
noUiSlider.create(slider?.value, {
    start: [0],
    connect: true,
    step: 1,
    range: {
        'min': 0,
        'max': 100
    },
    tooltips: true,
            format: {
                to: function (value) {
                    return Math.round(value);
                },
                from: function (value) {
                    return Math.round(value);
                }
            }

});

slider.value.noUiSlider.on('update', function (values) {
    currentValue.value = values.toString();
    emit('updateProperty',currentValue.value)
});
})

</script>

<style lang="scss">
#slider{
    padding: 0 17px 0px 6px;
}
.noUi-target{
    background: var(--aqua-color);
    border: none;
    height: 3px;
    cursor: pointer;
    box-shadow: none;
    border-radius: 0px;
}
.noUi-handle:before, .noUi-handle:after{
    display: none;
}
.noUi-horizontal .noUi-handle{
    border: none;
    border-radius: 0px;
    background: var(--yellow-primary) !important;
    cursor: pointer;
    box-shadow: none;
    border: none;
    border-radius: 0px;
    width: 24px;
    height: 24px;
    // right: 0px;
}
.noUi-tooltip{
    border: none;
    border-radius: 0px;
    background: transparent;
    color: var(--white-primary);
    padding: 5px;
    text-align: center;
    white-space: nowrap;
}
</style>