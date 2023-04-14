import ContainerBlock from "../components/ContainerBlock";

export default function Home({ repositories }) {
  return (
    <ContainerBlock
      title="The Developer - Developer, Writer, Creator"
      description="This is a template built specifically for my blog - Creating a developer portfolio that gets you a job."
    >

    </ContainerBlock>
  );
}

export const getServerSideProps = async () => {
  const repositories = {};
  return {
    props: {
      repositories,
    },
  };
};
