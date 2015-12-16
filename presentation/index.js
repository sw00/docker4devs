// Import React
import React from "react";
import { render } from "react-dom";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  x_the_y: require("../assets/X_all_the_Y.png"),
  mixer: require("../assets/mixer.jpg"),
  twins: require("../assets/twins.jpg"),
  incredible_machine: require("../assets/the-incredible-machine.png"),
  anatomy: require("../assets/anatomy.jpg"),
  blackbox: require("../assets/blackbox.jpg"),
  ws_1: require("../assets/ws_1.png"),
  ws_2: require("../assets/ws_2.png"),
  ws_3: require("../assets/ws_3.png"),
  ws_configuration: require("../assets/ws_configuration.png"),
  ws_multi: require("../assets/ws_multi.png"),
  ws_multi2: require("../assets/ws_multi2.png"),
  lego: require("../assets/lego.jpg"),
  cm_tools: require("../assets/cm_tools.jpg"),
  spaghetti: require("../assets/spaghetti.jpg"),
  tron: require("../assets/tron.jpg"),
  devops_tools: require("../assets/devops_tools.png"),
  containers: require("../assets/containers.jpg"),
  virtual_machine: require("../assets/virtual_machine.png"),
  userspace_vs_kernelspace: require("../assets/user-space-vs-kernel-space.png"),
  tron_guy: require("../assets/tron_guy.jpg"),
  containers_vs_vms: require("../assets/containers-vs-vms.jpg"),
  docker_image1: require("../assets/docker_image1.png"),
  docker_image2: require("../assets/docker_image2.png"),
  ws_docker1: require("../assets/ws_docker1.png"),
  ws_docker2: require("../assets/ws_docker2.png"),
  docker_hub: require("../assets/docker_hub.png"),
  docker_arch: require("../assets/docker_arch.svg"),
  demo_time: require("../assets/demo_time.jpg"),
};

preloader(images);

const theme = createTheme({
  primary: "#75982c",
  secondary: "black",
  tertiary: "white"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
      <Deck transition={["slide"]} transitionDuration={100} progress="bar">
        <Slide bgColor="primary">
          <Heading size={1}>docker</Heading>
          <Heading size={2}>for devs</Heading>
        </Slide>
        <Slide notes="choose your own adventure">
          <Heading size={5} textColor="white">Coming up...</Heading>
          <Layout>
              <List>
                <ListItem>What devs really want</ListItem>
                <ListItem>Anatomy of a Web Service</ListItem>
                <ListItem>Configuration Management</ListItem>
                <ListItem>Docker Concepts</ListItem>
                <ListItem>Demo Time</ListItem>
              </List>
          </Layout>
        </Slide>
        <Slide textColor="white" bgImage={images.x_the_y} bgDarken={0.70} notes="What do we want from our dev envs, and by extension all envs?">
          <Heading>What do we want?</Heading>
        </Slide>
        <Slide textColor="white" bgImage={images.mixer} bgDarken={0.70}
        notes="<ul><li>automated testing</li><li>sometimes debugging is necessary</li><li>mocks/stubs have limitations</li></ul>">
          <Heading size={2} textColor="primary">Fast Feedback</Heading>
          <Appear><Heading>validate our changes</Heading></Appear>
        </Slide>
        <Slide textColor="white" bgImage={images.twins} bgDarken={0.70} notes="It works on my machine. Works in production, but not in the CI.">
          <Heading size={2} textColor="primary">Consistency</Heading>
          <Appear><Heading>same code, same behaviour, everywhere</Heading></Appear>
        </Slide>
        <Slide textColor="white" bgImage={images.incredible_machine} bgDarken={0.70} notes="<ul><li>a system simple enough to reason about.</li><li>difficult in a distributed sys with SOA/microservices</li></ul>">
          <Heading size={2} textColor="primary">Managed Complexity</Heading>
          <Appear><Heading>easier troubleshooting</Heading></Appear>
        </Slide>
        <Slide bgImage={images.anatomy} bgDarken={0.50} notes="What is a web service really? What does it look like?">
          <Heading size={3} textColor="white">Anatomy of a Web Service</Heading>
        </Slide>
        <Slide bgImage={images.blackbox} bgDarken={0.20} notes="for all intents and purposes, most of the time it's a black box with an API.">
          <Heading  size={1} fit>[hostname]:[port]/[resource]</Heading>
          <Appear><Heading  size={1} textColor="primary" fit>monolith.net:2001/status</Heading></Appear>
        </Slide>
        <Slide bgColor="white" transition={["none"]}>
          <Image src={images.ws_1} margin="0px auto " width="700px"/>
        </Slide>
        <Slide bgColor="white" transition={["none"]}>
          <Image src={images.ws_2} margin="0px auto " width="700px"/>
        </Slide>
        <Slide bgColor="white" transition={["none"]}>
          <Image src={images.ws_3} margin="0px auto " width="700px"/>
        </Slide>
        <Slide bgColor="white" transition={["none"]}>
          <Image src={images.ws_configuration} margin="0px auto " width="700px"/>
        </Slide>
        <Slide bgColor="white" transition={["none"]}>
          <Image src={images.ws_multi} margin="0px auto " width="700px"/>
        </Slide>
        <Slide bgColor="white" transition={["none"]}>
          <Image src={images.ws_multi2} margin="0px auto " width="700px"/>
        </Slide>
        <Slide bgImage={images.lego} bgDarken={0.70} notes="<ul><li>infrastructure has become a core concept in configuration management</li></ul>">
          <Heading size={3} textColor="white" fit>Configuration Management</Heading>
          <Appear><Heading size={2} textColor="primary">Infrastructure as Code</Heading></Appear>
        </Slide>
        <Slide>
          <Heading size={1} notes="a typical CM workflow looks like this">CM Workflow</Heading>
          <List>
            <Appear><ListItem>Provision a machine</ListItem></Appear>
            <Appear><ListItem>Configure it</ListItem></Appear>
            <Appear><ListItem>Deploy your application</ListItem></Appear>
            <Appear><ListItem>Maintain configuration, continuously</ListItem></Appear>
          </List>
        </Slide>
        <Slide notes="there's a lot of tools to help with this">
          <Image src={images.cm_tools} margin="0px auto " width="700px"/>
        </Slide>
        <Slide bgImage={images.spaghetti} bgDarken={0.70} notes="<ul><li>suffers from same caveats as code</li><li>devs need to understand domain of sysadmin</li><li>code for the sake of code</li><li>complex archiecture = complex code</li></ul>">
          <BlockQuote>
            <Quote textColor="white">The problem with infrastructure as code is that your infrastructure is now code.</Quote>
            <Cite textColor="white">Unknown</Cite>
          </BlockQuote>
        </Slide>
        <Slide bgImage={images.tron} bgDarken={0.70} notes="<ul><li>3 main activities to working software in an environment</li><li>categories are not mutually exclusive</li><li>docker kind of fits in two, awkwardly</li></ul>">
          <Text textColor="white">How does docker fit in?</Text>
          <Appear><Image src={images.devops_tools} margin="0px auto " width="700px"/></Appear>
        </Slide>
        <Slide bgColor="black" notes="<ul><li>Docker/Containers kind of has its roots in the VM paradigm.</li><li>Virtual machines allow us to fake machines and allocate resources.</li></ul>">
          <Heading>Virtual Machines</Heading>
        </Slide>
        <Slide bgColor="black">
          <Image src={images.virtual_machine} margin="0px auto" width="700px"/>
        </Slide>
        <Slide bgImage={images.tron_guy} bgDarken={0.60} notes="<ul><li>Linux has this concept of kernel space and user space</li><li>It separates the resources and privileges of keeping hardware running and high level software.</li></ul>">
            <Heading size={4} textColor="white">*nix Architecture</Heading>
            <Image src={images.userspace_vs_kernelspace} margin="0px auto " width="700px"/>
        </Slide>
        <Slide bgImage={images.containers} bgDarken={0.70} notes="<ul><li>docker is an implementation of containers</li><li>containers isolate applications but share kernel/OS</li></ul>">
          <Heading>Containers</Heading>
        </Slide>
        <Slide bgColor="white">
          <Image src={images.containers_vs_vms} margin="0px auto " width="700px"/>
        </Slide>
        <Slide>
          <Heading>Docker Concepts</Heading>
        </Slide>
        <Slide>
          <Heading size={3} textColor="white">Docker Image</Heading>
          <Text>A layered, read-only snapshot of directory and files.</Text>
        </Slide>
        <Slide notes="<ul><li>golden image, similar to VMs</li><li>layered because of AUFS</li><li>writable layer is the actual container</li></ul>">
          <Image src={images.docker_image1} margin="20px auto " width="700px"/>
        </Slide>
        <Slide notes="<ul><li></li><li>layered because of AUFS</li><li>writable layer is the actual container</li></ul>">
          <Image src={images.docker_image2} margin="20px auto " width="700px"/>
        </Slide>
        <Slide bgColor="white" transition={["none"]} notes="Remember how a web service looks?">
          <Image src={images.ws_3} margin="0px auto " width="700px"/>
        </Slide>
        <Slide bgColor="white" transition={["none"]} notes="We can now encapsulate it inside an docker image.">
          <Image src={images.ws_docker1} margin="0px auto " width="700px"/>
        </Slide>
        <Slide bgColor="white" transition={["none"]} notes="Encapsulation for devs, isolation for ops.">
          <Image src={images.ws_docker2} margin="0px auto " width="700px"/>
        </Slide>
        <Slide notes="<ul><li>Describes how to build a docker image</li><li>Some additional configurations for run time: executable, ports, volumes</li></ul>">
          <Heading size={3} textColor="white">Dockerfile</Heading>
          <Text>Instructions to <b>build</b> an image.</Text>
        </Slide>
        <Slide>
          <CodePane
            lang="docker"
            source={require("raw!../Dockerfile")}
            margin="20px auto"/>
        </Slide>
        <Slide>
          <Heading>Registries</Heading>
          <Text>Private or public stores to <b>distribute</b> images.</Text>
        </Slide>
        <Slide>
          <Image src={images.docker_hub} margin="0px auto" width="700px"/>
        </Slide>
        <Slide>
          <Heading>Containers</Heading>
          <Text>Read-write layer on top of image in which applications can <b>run</b>.</Text>
        </Slide>
        <Slide>
          <Image src={images.docker_image1} margin="20px auto " width="700px"/>
        </Slide>
        <Slide>
          <CodePane
            lang="bash"
            source={require("raw!./docker-run.example")}
            margin="20px auto"/>
        </Slide>
        <Slide bgColor="#3777a4">
          <Heading>Docker Architecture</Heading>
          <Image src={images.docker_arch} margin="0px auto" width="700px"/>
        </Slide>
        <Slide bgColor="#3777a4">
          <Heading>Questions?</Heading>
        </Slide>
        <Slide bgImage={images.demo_time} bgDarken={0.70}>
          <Heading>Demo Time</Heading>
        </Slide>
      </Deck>
      </Spectacle>
    )
  }
}
