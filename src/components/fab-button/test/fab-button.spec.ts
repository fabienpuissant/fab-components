import { newSpecPage } from '@stencil/core/testing';
import { FabButton } from '../fab-button';

describe('fab-component', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [FabButton],
      html: '<fab-button></fab-button>',
    });
    expect(root).toEqualHtml(`
        <fab-button>
          <mock:shadow-root>
          <button class="button secondary"></button>
          </mock:shadow-root>
        </fab-button>
      `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [FabButton],
      html: `<fab-button label="Stencil" primary rounded="medium" width="100px" height="200px" disabled></fab-button>`,
    });
    expect(root).toEqualHtml(`
        <fab-button label="Stencil" primary rounded="medium" width="100px" height="200px" disabled>
          <mock:shadow-root>
            <button class="button primary rounded-medium disabled" style="width: 100px; height: 200px;">Stencil</button>
          </mock:shadow-root>
        </fab-button>
      `);
  });
});
