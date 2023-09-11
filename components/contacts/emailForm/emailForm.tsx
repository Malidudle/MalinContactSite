"use client"

import emailjs from '@emailjs/browser';
import {
  TextInput,
  Textarea,
  SimpleGrid,
  Group,
  Title,
  Button,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { FormEvent } from 'react';

export function GetInTouchSimple() {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
    },
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.values.name || !form.values.email || !form.values.message) {
      alert("Please fill in all fields.");
      return;
    }

    emailjs.sendForm('service_mbqojbb', 'template_kn0r633', e.currentTarget, 'aw3APk4rymQQvCo13')
      .then((result) => {
          console.log(result.text);
          form.reset();
      }, (error) => {
          console.log(error.text);
          form.reset();
      });
  };


  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <Title
        order={2}
        size="h1"
        weight={900}
        align="center"
        sx={(theme) => ({
          fontFamily: `__Share_Tech_Mono_3ec33c, monospace, ${theme.fontFamily}`,
          fontWeight: 400,
          fontSize: "32px",
        })}
      >
        Send An Email
      </Title>

      <SimpleGrid cols={2} mt="xl" breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
        <TextInput
          label="Name"
          type="text"
          placeholder="Your name"
          name="user_name"
          sx={(theme) => ({
            fontFamily: `__Share_Tech_Mono_3ec33c, monospace, ${theme.fontFamily}`,
            color: "white",
          })}
          labelProps={{ style: { color: "white" } }}
          variant="filled"
          {...form.getInputProps("name")}
        />
        <TextInput
          label="Email"
          type="email"
          placeholder="Your email"
          name="user_email"
          sx={(theme) => ({
            fontFamily: `__Share_Tech_Mono_3ec33c, monospace, ${theme.fontFamily}`,
          })}
          labelProps={{ style: { color: "white" } }}
          variant="filled"
          {...form.getInputProps("email")}
        />
      </SimpleGrid>
      <Textarea
        mt="md"
        label="Message"
        placeholder="Your message"
        maxRows={10}
        color='#93B1A6'
        minRows={5}
        autosize
        name="message"
        sx={(theme) => ({
          fontFamily: `__Share_Tech_Mono_3ec33c, monospace, ${theme.fontFamily}`,
        })}
        labelProps={{ style: { color: "white" } }}
        variant="filled"
        {...form.getInputProps("message")}
      />

      <Group position="center" mt="xl">
        <Button
          type="submit"
          value="Send"
          size="md"
          sx={(theme) => ({
            fontFamily: `__Share_Tech_Mono_3ec33c, monospace, ${theme.fontFamily}`,
          })}
        >
          Send message
        </Button>
      </Group>
    </form>
  );
}
