import { component$ } from "@builder.io/qwik";
import { useDocumentHead, useLocation } from "@builder.io/qwik-city";

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();

  return (
    <>
      <title>{head.title}</title>

      <link rel="canonical" href={loc.url.href} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, height=device-height, viewport-fit=cover"
      />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link rel="icon" type="image/svg+xml" href="/logo_light.png" />
      <meta name="theme-color" content="#000" />

      <meta name="apple-mobile-web-app-capable" content="yes" />

      <link rel="apple-touch-icon" href="img/icons/icon-192x192.png" />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="img/icons/icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="img/icons/icon-192x192.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="167x167"
        href="img/icons/icon-152x152.png"
      />

      <link
        rel="apple-touch-startup-image"
        media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)"
        href="img/icons-ios/apple-launch-1125x2436.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"
        href="img/icons-ios/apple-launch-750x1334.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3)"
        href="img/icons-ios/apple-launch-1242x2208.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)"
        href="img/icons-ios/apple-launch-640x1136.png"
      />

      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />

      <meta name="apple-mobile-web-app-title" content="Ander's portfolio" />
      {head.meta.map((m) => (
        <meta key={m.key} {...m} />
      ))}

      {head.links.map((l) => (
        <link key={l.key} {...l} />
      ))}

      {head.styles.map((s) => (
        <style key={s.key} {...s.props} dangerouslySetInnerHTML={s.style} />
      ))}
    </>
  );
});
