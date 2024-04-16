'use client';
import React from "react";
import SearchCode from '@/components/certificate/SearchCode';
import SearchDNI from '@/components/certificate/SearchDNI';
import SearchName from '@/components/certificate/SearchName';
import { Tabs, Tab, Card, CardBody, CardHeader, Input, Button, } from "@nextui-org/react";
import { Link } from "react-router-dom";

export default function TestingPage() {

  const handleSearch = (data) => {
    console.log(data);
  };
  
  return (
    <div className="flex w-full flex-col">
      <Tabs
        aria-label="Options"
        color="primary"
      >
        <Tab key="photos" title="Photos"
          onClick={() => handleButton('documentNumber')}
          className="">
          <Card>
            <CardBody>
                <div>
                  <SearchDNI onSearchDNI={handleSearch} />
                </div>
            </CardBody>
          </Card>
        </Tab>
        <Tab key="music" title="Music">
          <Card>
          <CardBody>
                <div>
                  <SearchName onSearchDNI={handleSearch} />
                </div>
            </CardBody>
          </Card>
        </Tab>
        <Tab key="videos" title="Videos">
          <Card>
          <CardBody>
                <div>
                  <SearchCode onSearchDNI={handleSearch} />
                </div>
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
