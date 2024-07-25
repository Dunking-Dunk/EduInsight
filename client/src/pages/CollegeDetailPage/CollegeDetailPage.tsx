
import { Card, CardBody, CardHeader, Spacer, Tab, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tabs } from "@nextui-org/react";
import CollegeCard from "../../components/CollegeCard/CollegeCard";
import SearchBarContainer from "../../components/SearchBarContainer/SearchBarContainer";


const CollegeDetailPage = () => {
    return(
        <div className="college-detail-page-container min-h-[100vh] p-4">
            <SearchBarContainer />
            <div className="college-card-container gap-4 w-[70%] mx-auto my-4 flex flex-col items-center">
                <CollegeCard
                        collegeRank={1}
                        collegeName="Rajalakshmi Engineering College"
                        collegeCommunity="OC"
                        collegeDept="CSE"
                        collegeLocation="Chennai"
                        collegeMaxCutoff={0}
                        collegeMinCutoff={0}
                />
                <Spacer />

                <Card className="min-w-[90%]">
                    <CardHeader className="w-[100%]">
                        <Card className="flex items-center justify-center w-[70%] bg-black text-white mx-auto h-14" radius="sm">
                            <span>NIRF: -100</span>
                        </Card>
                    </CardHeader>
                    <CardBody className="flex justify-center items-center">
                        <Tabs radius="full" color="primary" variant="bordered">
                            <Tab title="2019">
                                <Table color="primary" aria-label="Cutoff Details">
                                    <TableHeader>
                                        <TableColumn>Department</TableColumn>
                                        <TableColumn>Community</TableColumn>
                                        <TableColumn>Min Cutoff</TableColumn>
                                        <TableColumn>Max Cutoff</TableColumn>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>
                                                Computer Science And Engineering
                                            </TableCell>
                                            <TableCell>
                                                OC
                                            </TableCell>
                                            <TableCell>
                                                100
                                            </TableCell>
                                            <TableCell>
                                                200
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>
                                                Computer Science And Business Systems
                                            </TableCell>
                                            <TableCell>
                                                OC
                                            </TableCell>
                                            <TableCell>
                                                100
                                            </TableCell>
                                            <TableCell>
                                                200
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>
                                                Nothing
                                            </TableCell>
                                            <TableCell>
                                                OC
                                            </TableCell>
                                            <TableCell>
                                                100
                                            </TableCell>
                                            <TableCell>
                                                200
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </Tab>
                            <Tab title="2020">
                            <Table color="primary" aria-label="Cutoff Details">
                                    <TableHeader>
                                        <TableColumn>Department</TableColumn>
                                        <TableColumn>Community</TableColumn>
                                        <TableColumn>Min Cutoff</TableColumn>
                                        <TableColumn>Max Cutoff</TableColumn>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>
                                                Computer Science And Engineering
                                            </TableCell>
                                            <TableCell>
                                                OC
                                            </TableCell>
                                            <TableCell>
                                                100
                                            </TableCell>
                                            <TableCell>
                                                200
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </Tab>
                            <Tab title="2021">
                            <Table color="primary" aria-label="Cutoff Details">
                                    <TableHeader>
                                        <TableColumn>Department</TableColumn>
                                        <TableColumn>Community</TableColumn>
                                        <TableColumn>Min Cutoff</TableColumn>
                                        <TableColumn>Max Cutoff</TableColumn>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>
                                                Computer Science And Engineering
                                            </TableCell>
                                            <TableCell>
                                                OC
                                            </TableCell>
                                            <TableCell>
                                                100
                                            </TableCell>
                                            <TableCell>
                                                200
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>
                                                Aeronautical Engineering
                                            </TableCell>
                                            <TableCell>
                                                OC
                                            </TableCell>
                                            <TableCell>
                                                100
                                            </TableCell>
                                            <TableCell>
                                                200
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>
                                                Nothing
                                            </TableCell>
                                            <TableCell>
                                                OC
                                            </TableCell>
                                            <TableCell>
                                                100
                                            </TableCell>
                                            <TableCell>
                                                200
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </Tab>
                            <Tab title="2022">
                            <Table color="primary" aria-label="Cutoff Details">
                                    <TableHeader>
                                        <TableColumn>Department</TableColumn>
                                        <TableColumn>Community</TableColumn>
                                        <TableColumn>Min Cutoff</TableColumn>
                                        <TableColumn>Max Cutoff</TableColumn>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>
                                                Computer Science And Engineering
                                            </TableCell>
                                            <TableCell>
                                                OC
                                            </TableCell>
                                            <TableCell>
                                                100
                                            </TableCell>
                                            <TableCell>
                                                200
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>
                                                Computer Science And Business Systems
                                            </TableCell>
                                            <TableCell>
                                                OC
                                            </TableCell>
                                            <TableCell>
                                                100
                                            </TableCell>
                                            <TableCell>
                                                200
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>
                                                Some new Department
                                            </TableCell>
                                            <TableCell>
                                                OC
                                            </TableCell>
                                            <TableCell>
                                                100
                                            </TableCell>
                                            <TableCell>
                                                200
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </Tab>
                            <Tab title="2023">
                            <Table color="primary" aria-label="Cutoff Details">
                                    <TableHeader>
                                        <TableColumn>Department</TableColumn>
                                        <TableColumn>Community</TableColumn>
                                        <TableColumn>Min Cutoff</TableColumn>
                                        <TableColumn>Max Cutoff</TableColumn>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>
                                                Computer Science And Engineering
                                            </TableCell>
                                            <TableCell>
                                                OC
                                            </TableCell>
                                            <TableCell>
                                                100
                                            </TableCell>
                                            <TableCell>
                                                200
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>
                                                Computer Science And Business Systems
                                            </TableCell>
                                            <TableCell>
                                                OC
                                            </TableCell>
                                            <TableCell>
                                                100
                                            </TableCell>
                                            <TableCell>
                                                200
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </Tab>
                        </Tabs>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

export default CollegeDetailPage;