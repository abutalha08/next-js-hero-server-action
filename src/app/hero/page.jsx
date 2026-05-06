import { Button, Drawer } from "@heroui/react";


const HeroPage = () => {
    return (
        <div>
            <h2>Hero page</h2>
            <Button>Hero button</Button>
            <Button variant="secondary">Hero button</Button>
            <Button variant="outline">Hero button</Button>
            <Button variant="ghost">Hero button</Button>

             <Drawer>
      <Button variant="secondary">Open Drawer</Button>
      <Drawer.Backdrop>
        <Drawer.Content placement="right">
          <Drawer.Dialog>
            <Drawer.Header>
              <Drawer.Heading>Drawer Title</Drawer.Heading>
            </Drawer.Header>
            <Drawer.Body>
              <p>
                This is a bottom drawer built with React Aria's Modal component. It slides up from
                the bottom of the screen with a smooth CSS transition.
              </p>
            </Drawer.Body>
            <Drawer.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button slot="close">Confirm</Button>
            </Drawer.Footer>
          </Drawer.Dialog>
        </Drawer.Content>
      </Drawer.Backdrop>
    </Drawer>
        </div>
    );
};

export default HeroPage;