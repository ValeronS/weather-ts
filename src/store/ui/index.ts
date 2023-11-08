import { defineStore } from 'pinia';
import { ref, watchEffect } from 'vue';

import { E_Modals } from '@/utils';

export const useModalStore = defineStore('ModalStore', () => {
  const stack = ref<Set<E_Modals>>(new Set());
  const modalText = ref<string | null>(null);

  const setModal = (id: E_Modals) => {
    stack.value.add(id);
  };
  const setModalText = (text: string) => {
    modalText.value = text;
  };
  const clearCurrentModalId = () => {
    stack.value.delete([...stack.value.values()].at(-1)!);
  };
  const clear = () => {
    stack.value.clear();
  };
  const replaceLast = (id: E_Modals) => {
    clearCurrentModalId();
    setModal(id);
  };
  const has = (id: E_Modals) => stack.value.has(id);

  watchEffect(() => {
    console.log([...stack.value]);
  });

  return { has, setModal, setModalText, clearCurrentModalId, clear, replaceLast, stack, modalText };
});
