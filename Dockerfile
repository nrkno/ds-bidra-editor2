FROM node:18.15.0-alpine3.17
ARG API_PRUNED
ARG RELEASE

WORKDIR /app

ADD ui/dist/ ui
ADD ${API_PRUNED}/ api
#ADD api/dist api

RUN adduser --uid 1001 --disabled-password admin

ENV NODE_ENV=production
ENV UI_ABSOLUTE_PATH=/app/ui/
ENV PORT=5001
ENV RELEASE=${RELEASE}

EXPOSE 5001
USER admin

CMD ["node", "/app/api/dist/index.js" ]
