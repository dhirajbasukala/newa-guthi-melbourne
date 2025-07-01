import Link from 'next/link';
import { Card } from 'components/card';
import { ContextAlert } from 'components/context-alert';
import { Markdown } from 'components/markdown';
import { RandomQuote } from 'components/random-quote';
import { getNetlifyContext } from 'utils';

const contextExplainer = `
The card below is rendered on the server based on the value of \`process.env.CONTEXT\` 
([docs](https://docs.netlify.com/configure-builds/environment-variables/#build-metadata)):
`;

const preDynamicContentExplainer = `
The card content below is fetched by the client-side from \`/quotes/random\` (see file \`app/quotes/random/route.js\`) with a different quote shown on each page load:
`;

const postDynamicContentExplainer = `
On Netlify, Next.js Route Handlers are automatically deployed as [Serverless Functions](https://docs.netlify.com/functions/overview/).
Alternatively, you can add Serverless Functions to any site regardless of framework, with acccess to the [full context data](https://docs.netlify.com/functions/api/).

And as always with dynamic content, beware of layout shifts & flicker! (here, we aren't...)
`;

const ctx = getNetlifyContext();

export default function Page() {
    return (
        <div className="flex flex-col gap-12 sm:gap-16">
            <section>
                {/* <ContextAlert className="mb-6" /> */}
                <h1 className="mb-4">Newa Guthi Melbourne</h1>
                <p className="mb-0 text-lg">We are currently under development. Please visit us later. </p>
                <p className="mb-6 text-lg font-light">
                    If you have any query or just want to say hello, contact us at{' '}
                    <a className="text-orange-400 underline-offset-4 underline" href="mailto:hello@newaguthi.org.au">
                        hello@newaguthi.org.au
                    </a>
                </p>
            </section>
            {/* {!!ctx && ( */}
            {/*     <section className="flex flex-col gap-4"> */}
            {/*         <Markdown content={contextExplainer} /> */}
            {/*         <RuntimeContextCard /> */}
            {/*     </section> */}
            {/* )} */}
            {/* <section className="flex flex-col gap-4"> */}
            {/*     <Markdown content={preDynamicContentExplainer} /> */}
            {/*     <RandomQuote /> */}
            {/*     <Markdown content={postDynamicContentExplainer} /> */}
            {/* </section> */}
        </div>
    );
}

function RuntimeContextCard() {
    const title = `Netlify Context: running in ${ctx} mode.`;
    if (ctx === 'dev') {
        return (
            <Card title={title}>
                <p>Next.js will rebuild any page you navigate to, including static pages.</p>
            </Card>
        );
    } else {
        return (
            <Card title={title}>
                <p>This page was statically-generated at build time.</p>
            </Card>
        );
    }
}
