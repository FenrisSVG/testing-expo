/**
 * @jest-environment jsdom
 */

const { axe, toHaveNoViolations } = require('jest-axe')

expect.extend(toHaveNoViolations)

it('should demonstrate this matcher`s usage', async () => {
  const render = () => '<img src="src/assets/images/pattern-divider-desktop.svg" alt="Image separator" srcset="src/assets/images/pattern-divider-desktop.svg, src/assets/images/pattern-divider-mobile.svg 2x" class="max-w-full mx-auto my-auto" data-test-id="advice-image" aria-label="image">'

  // pass anything that outputs html to axe
  const html = render();

  expect(await axe(html)).toHaveNoViolations();
})
