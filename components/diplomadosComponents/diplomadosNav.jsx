'use client';
import React from "react";
import {Tabs, Tab, Card, CardBody, RadioGroup, Radio} from "@nextui-org/react";
import DiploCivil from './diplomadosCivil';
import DiploAmbiental from './diplomadosAmbient';
import DashboardSkeleton from '@/components/home/skeletons'
import { Suspense } from 'react'

export default function App() {
  const [placement, setPlacement] = React.useState("top");
  return (
    <div className="flex flex-col px-4">

      <div className="flex w-full flex-col">
        <Tabs aria-label="Options" placement={placement}>
          <Tab key="photos" title="Ing. Civil">
            <Card>
              <CardBody>
                <DiploCivil/>
              </CardBody>
            </Card>  
          </Tab>
          <Tab key="music" title="Ing. Ambiental">
            <Card>
              <CardBody>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </CardBody>
            </Card>  
          </Tab>
          <Tab key="videos" title="Ing. Agrónoma">
            <Card>
              <CardBody>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </CardBody>
            </Card>  
          </Tab>
          <Tab key="photos" title="Ing. Alimentaria">
            <Card>
              <CardBody>
                <DiploCivil/>
              </CardBody>
            </Card>  
          </Tab>
          <Tab key="photos" title="Otras Profesiones">
            <Card>
              <CardBody>
                <DiploCivil/>
              </CardBody>
            </Card>  
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
